"use client";

import { useEffect, useMemo, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { ApplicationRow } from "@/lib/applications";
import { PillArrowButton } from "@/components/shared/pill-arrow-button";
import { PillButton } from "@/components/shared/pill-button";
import { SelectDropdown } from "@/components/shared/select-dropdown";

const ADMIN_STORAGE_KEY = "random-seas-2026";

const personalFields: Array<{
  key: keyof ApplicationRow;
  label: string;
  required?: boolean;
  description?: string;
  multiline?: boolean;
}> = [
  { key: "full_name", label: "Họ Tên", required: true },
  { key: "email", label: "Email", required: true },
  { key: "phone", label: "Số Điện Thoại", required: true },
  {
    key: "current_school",
    label: "Trường học hiện tại (THPT hoặc Đại Học)",
    required: true,
  },
  { key: "academic_year", label: "Năm học", required: true },
  {
    key: "class_or_major",
    label: "Lớp học (đối với THPT) hoặc chuyên ngành (đối với Đại Học)",
    required: true,
  },
  { key: "hometown", label: "Quê Quán", required: true },
  { key: "permanent_address", label: "Địa Chỉ Thường Trú", required: true },
  {
    key: "academic_achievements",
    label: "Thành tích học tập",
    description:
      "Đối với THPT: Điểm của các môn học mà bạn tự tin nhất từ bất kỳ chương trình học nào (THPT, AP, IB, etc). Đối với Đại Học: Điểm tổng kết của các môn học mà các bạn cho là liên quan tới chương trình.",
    required: true,
    multiline: true,
  },
  {
    key: "teacher_name",
    label: "Họ tên giáo viên (BTC sẽ liên lạc với giáo viên nếu cần thiết)",
    required: true,
  },
  {
    key: "teacher_contact",
    label: "Email hoặc/và số điện thoại giáo viên",
    required: true,
  },
  {
    key: "awards",
    label: "Giải thưởng học thuật hoặc hoạt động ngoại khóa",
    description: "(Không bắt buộc)",
    multiline: true,
  },
];

const questionFields: Array<{
  key: keyof ApplicationRow;
  label: string;
  required?: boolean;
  multiline?: boolean;
}> = [
  {
    key: "why_join",
    label: "Tại sao bạn muốn tham gia chương trình? (300-500 từ)",
    required: true,
    multiline: true,
  },
  {
    key: "build_idea",
    label:
      "Nếu SEAS cung cấp cho bạn mọi nguồn lực để biến một ý tưởng thành hiện thực, bạn muốn phát minh ra điều gì? (không giới hạn từ)",
    required: true,
    multiline: true,
  },
  {
    key: "difficult_subject",
    label:
      "Kể về một lần bạn phải học một kiến thức hoặc môn học khó. (100-200 từ)",
    required: true,
    multiline: true,
  },
  {
    key: "helping_others",
    label:
      "Hãy kể về một lần bạn chủ động giúp đỡ người khác học, tham gia xây dựng một hoạt động chung, hoặc đóng góp cho cộng đồng xung quanh mình. (100-200 từ)",
    required: true,
    multiline: true,
  },
  {
    key: "community_long_term",
    label:
      "Điều gì khiến bạn muốn gắn bó lâu dài với một cộng đồng học tập như SEAS, thay vì chỉ tham gia một lần? (100-200 từ)",
    required: true,
    multiline: true,
  },
  {
    key: "future_contribution",
    label:
      "Nếu có cơ hội quay lại SEAS trong tương lai với vai trò trợ giảng, mentor, hoặc thành viên ban tổ chức, bạn muốn đóng góp điều gì? Vì sao? (100-200 từ)",
    required: true,
    multiline: true,
  },
  {
    key: "contribute_to_experience",
    label:
      "Ngoài việc học hỏi, bạn nghĩ mình có thể đóng góp gì cho trải nghiệm chung của các bạn khác tại SEAS? (100-200 từ)",
    required: true,
    multiline: true,
  },
  {
    key: "needs_financial_support",
    label:
      "Bạn có cần phải hỗ trợ tài chính để di chuyển tới trường hè ở Đồng Hới, Quảng Trị không?",
    required: true,
  },
  {
    key: "financial_support_reason",
    label: "Nếu bạn cần phải hỗ trợ tài chính, giải thích tại sao.",
    multiline: true,
  },
  {
    key: "conditions",
    label:
      "Bạn có những điều kiện hoặc khó khăn nào có thể ảnh hưởng đến việc tham gia đầy đủ chương trình không? (ví dụ: tài chính gia đình, di chuyển, thiết bị, sức khỏe, ngôn ngữ...)",
    multiline: true,
  },
  {
    key: "extra_info",
    label:
      "Trong ô dưới đây có thể chia sẻ thông tin thêm để SEAS biết rõ hơn về bạn. Bạn có thể chia sẻ các bài báo về bạn, các bài báo bạn viết, hoặc các hoạt động tổ chức mà bạn đã tham gia, các dự án khoa học mà bạn đã từng làm.",
    multiline: true,
  },
  {
    key: "resume_name",
    label: "Hồ sơ (CV/Resume)",
    multiline: true,
  },
];

function formatSubmittedLabel(row: ApplicationRow, index: number) {
  const createdAt = row.submitted_at ?? row.created_at ?? "";
  const dateLabel = createdAt
    ? new Intl.DateTimeFormat("vi-VN", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(new Date(createdAt))
    : `#${index + 1}`;

  return `${row.full_name || "Ứng viên chưa rõ tên"} - ${dateLabel}`;
}

function DisabledField({
  label,
  value,
  description,
  multiline = false,
  required = false,
}: {
  label: string;
  value: string;
  description?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <label className="font-lexend text-[1rem] font-semibold text-[#111111] md:text-[1.05rem]">
          {label}
          {required ? <span className="ml-1 text-[#FF5C39]">*</span> : null}
        </label>
        {description ? (
          <p className="font-lexend text-[0.98rem] leading-[1.7] text-[#5F6772]">
            {description}
          </p>
        ) : null}
      </div>
      <div
        className={`w-full rounded-[18px] border border-[#E2E8EE] bg-[#F3F7FB] px-5 text-[1rem] text-[#40474F] opacity-90 shadow-none ${
          multiline ? "min-h-[148px] py-4" : "min-h-[56px] py-4"
        }`}
      >
        <p className="font-lexend whitespace-pre-wrap break-words leading-[1.75]">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}

function LoginCard({
  password,
  setPassword,
  onSubmit,
  error,
  loading,
}: {
  password: string;
  setPassword: (value: string) => void;
  onSubmit: () => void;
  error: string;
  loading: boolean;
}) {
  return (
    <article className="mx-auto max-w-[560px] rounded-[32px] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(45,139,186,0.16)] md:px-10 md:py-10">
      <div className="space-y-4 text-center">
        <h1 className="font-space-grotesk text-[2rem] font-bold uppercase tracking-[-0.04em] text-[#04536E] md:text-[2.7rem]">
          Admin
        </h1>
        <p className="font-lexend text-[1rem] leading-[1.75] text-[#5B6671]">
          Trang này chỉ dành cho BTC và các Admin của SEAS 2026.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <label className="block font-lexend text-[1rem] font-semibold text-[#111111]">
          Mật khẩu
        </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSubmit();
            }
          }}
          placeholder="Nhập mật khẩu admin"
          className="h-[56px] w-full rounded-[18px] border border-[#D7DCE1] bg-white px-5 font-lexend text-[1rem] text-[#263341] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#B9B9B9] focus:border-[#4AA8D6] focus:shadow-[0_0_0_3px_rgba(74,168,214,0.16)]"
        />
        {error ? (
          <p className="font-lexend text-[0.95rem] text-[#FF6E3D]">{error}</p>
        ) : null}
        <div className="flex justify-center pt-2">
          <PillArrowButton
            label={loading ? "Đang vào..." : "Vào dashboard"}
            onClick={onSubmit}
            disabled={loading}
            className="min-h-[50px] min-w-[0] px-8 text-[0.96rem]"
          />
        </div>
      </div>
    </article>
  );
}

function ReviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[32px] bg-white px-5 py-7 shadow-[0_16px_40px_rgba(45,139,186,0.18)] md:px-10 md:py-10">
      <div className="mb-8 text-center md:mb-10">
        <h2 className="font-space-grotesk text-[1.8rem] font-bold uppercase leading-none tracking-[-0.04em] text-[#04536E] md:text-[2.4rem]">
          {title}
        </h2>
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export function AdminDashboardPage() {
  const [password, setPassword] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [rows, setRows] = useState<ApplicationRow[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    const storedPassword =
      window.sessionStorage.getItem(ADMIN_STORAGE_KEY) ?? "";

    if (!storedPassword) {
      setLoading(false);
      return;
    }

    setPassword(storedPassword);
    setSavedPassword(storedPassword);
    void loadApplications(storedPassword, false);
  }, []);

  async function loadApplications(nextPassword: string, persist = true) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/applications", {
        headers: {
          "x-admin-password": nextPassword,
        },
        cache: "no-store",
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        rows?: ApplicationRow[];
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Không thể tải danh sách đơn.");
      }

      const nextRows = data.rows ?? [];
      setRows(nextRows);
      setSelectedIndex(0);
      setIsAuthenticated(true);
      setSavedPassword(nextPassword);

      if (persist) {
        window.sessionStorage.setItem(ADMIN_STORAGE_KEY, nextPassword);
      }
    } catch (nextError) {
      setIsAuthenticated(false);
      setRows([]);
      setSavedPassword("");
      window.sessionStorage.removeItem(ADMIN_STORAGE_KEY);
      setError(
        nextError instanceof Error
          ? nextError.message
          : "Không thể đăng nhập dashboard.",
      );
    } finally {
      setLoading(false);
      setAuthLoading(false);
    }
  }

  async function handleLogin() {
    if (!password.trim()) {
      setError("Vui lòng nhập mật khẩu admin.");
      return;
    }

    setAuthLoading(true);
    await loadApplications(password.trim());
  }

  async function handleExport() {
    if (!savedPassword) {
      return;
    }

    setExporting(true);
    setError("");

    try {
      const response = await fetch("/api/applications/export", {
        headers: {
          "x-admin-password": savedPassword,
        },
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "Không thể tải file export.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `seas-applications-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(url);
    } catch (nextError) {
      setError(
        nextError instanceof Error
          ? nextError.message
          : "Không thể tải file export.",
      );
    } finally {
      setExporting(false);
    }
  }

  const selectedRow = rows[selectedIndex] ?? null;

  const selectedOptions = useMemo(
    () =>
      rows.map((row, index) => ({
        value: String(index),
        label: formatSubmittedLabel(row, index),
      })),
    [rows],
  );

  return (
    <section className="min-h-screen bg-[#F9FCFF] py-10 md:py-14">
      <div
        className={`container ${!isAuthenticated ? "flex min-h-[calc(100vh-80px)] items-center justify-center md:min-h-[calc(100vh-112px)]" : ""}`}
      >
        {!isAuthenticated ? (
          <LoginCard
            password={password}
            setPassword={setPassword}
            onSubmit={handleLogin}
            error={error}
            loading={authLoading}
          />
        ) : (
          <article className="px-5 py-6 md:px-8 md:py-8">
            <div className="flex justify-end gap-4">
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={() => {
                    window.sessionStorage.removeItem(ADMIN_STORAGE_KEY);
                    setPassword("");
                    setSavedPassword("");
                    setRows([]);
                    setSelectedIndex(0);
                    setIsAuthenticated(false);
                  }}
                  className="font-lexend text-[0.95rem] font-semibold text-[#5B6671] underline decoration-[#BFD8E6] underline-offset-4"
                >
                  Đăng xuất
                </button>
              ) : null}
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-2">
                <h1 className="font-space-grotesk text-[2.2rem] font-bold uppercase tracking-[-0.04em] text-[#04536E] md:text-[3rem]">
                  Admin dashboard
                </h1>
                <p className="font-lexend text-[1.1rem] leading-[1.75] text-[#5B6671]">
                  {rows.length} hồ sơ đã nộp thành công.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PillButton
                  label={exporting ? "Đang tải..." : "Xuất Excel"}
                  isActive
                  onClick={handleExport}
                  disabled={exporting || rows.length === 0}
                  className="min-h-[48px] min-w-[160px] px-6 py-3 font-space-grotesk text-[0.96rem] font-bold uppercase"
                />
              </div>
            </div>

            {error ? (
              <p className="mt-4 font-lexend text-[0.95rem] text-[#FF6E3D]">
                {error}
              </p>
            ) : null}

            {loading ? (
              <p className="mt-6 font-lexend text-[1rem] text-[#5B6671]">
                Đang tải danh sách đơn...
              </p>
            ) : rows.length === 0 ? (
              <p className="mt-6 font-lexend text-[1rem] text-[#5B6671]">
                Chưa có hồ sơ nào được gửi lên.
              </p>
            ) : (
              <div className="mt-8 space-y-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end">
                  <div className="flex-1">
                    <label className="mb-2 block font-lexend text-[0.95rem] font-semibold text-[#111111]">
                      Chọn hồ sơ để xem
                    </label>
                    <SelectDropdown
                      value={String(selectedIndex)}
                      onChange={(value) => setSelectedIndex(Number(value))}
                      options={selectedOptions}
                      className="rounded-[18px] border-[#D7DCE1] px-4 py-[0.9rem] font-lexend text-[1rem] normal-case text-[#263341] shadow-none"
                      iconClassName="text-[1.55rem]"
                    />
                  </div>

                  <div className="flex min-h-[54px] items-center justify-center rounded-full border border-[#D7E3EC] bg-white px-4 shadow-[0_10px_24px_rgba(45,139,186,0.08)]">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((current) => Math.max(0, current - 1))
                      }
                      disabled={selectedIndex === 0}
                      className="grid h-9 w-9 place-items-center text-[1.3rem] text-[#2D8BBA] transition-colors duration-200 hover:text-[#0f6e98] disabled:cursor-not-allowed disabled:text-[#C9D6E0]"
                      aria-label="Hồ sơ trước"
                    >
                      <HiChevronLeft />
                    </button>
                    <span className="min-w-[56px] text-center font-space-grotesk text-[1.25rem] font-bold text-[#2D8BBA]">
                      {selectedIndex + 1}/{rows.length}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((current) =>
                          Math.min(rows.length - 1, current + 1),
                        )
                      }
                      disabled={selectedIndex === rows.length - 1}
                      className="grid h-9 w-9 place-items-center text-[1.3rem] text-[#2D8BBA] transition-colors duration-200 hover:text-[#0f6e98] disabled:cursor-not-allowed disabled:text-[#C9D6E0]"
                      aria-label="Hồ sơ sau"
                    >
                      <HiChevronRight />
                    </button>
                  </div>
                </div>

                {selectedRow ? (
                  <div className="space-y-10">
                    <ReviewSection title="1. Thông tin cá nhân">
                      {personalFields.map((field) => (
                        <DisabledField
                          key={field.key}
                          label={field.label}
                          description={field.description}
                          required={field.required}
                          multiline={field.multiline}
                          value={String(selectedRow[field.key] ?? "")}
                        />
                      ))}
                    </ReviewSection>

                    <ReviewSection title="2. Trả lời câu hỏi">
                      {questionFields.map((field) => (
                        <DisabledField
                          key={field.key}
                          label={field.label}
                          required={field.required}
                          multiline={field.multiline}
                          value={String(selectedRow[field.key] ?? "")}
                        />
                      ))}
                    </ReviewSection>
                  </div>
                ) : null}
              </div>
            )}
          </article>
        )}
      </div>
    </section>
  );
}
