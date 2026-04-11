"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HiArrowLeft, HiCheck } from "react-icons/hi2";
import { PillButton } from "@/components/shared/pill-button";

type StepId = "personal" | "questions";
type SaveState = "idle" | "saving" | "saved";
type FinancialSupportValue = "Có" | "Không" | "";
type ConfirmAction = "submit" | "reset" | null;

type ApplyFormData = {
  fullName: string;
  email: string;
  phone: string;
  currentSchool: string;
  academicYear: string;
  classOrMajor: string;
  hometown: string;
  permanentAddress: string;
  academicAchievements: string;
  teacherName: string;
  teacherContact: string;
  awards: string;
  whyJoin: string;
  buildIdea: string;
  difficultSubject: string;
  helpingOthers: string;
  communityLongTerm: string;
  futureContribution: string;
  contributeToExperience: string;
  needsFinancialSupport: FinancialSupportValue;
  financialSupportReason: string;
  conditions: string;
  extraInfo: string;
  resumeName: string;
};

type SubmittedPayload = {
  submittedAt: string;
  data: ApplyFormData;
};

const DRAFT_STORAGE_KEY = "seas-apply-form-draft";
const SUBMITTED_STORAGE_KEY = "seas-apply-form-submitted";

const defaultFormData: ApplyFormData = {
  fullName: "",
  email: "",
  phone: "",
  currentSchool: "",
  academicYear: "",
  classOrMajor: "",
  hometown: "",
  permanentAddress: "",
  academicAchievements: "",
  teacherName: "",
  teacherContact: "",
  awards: "",
  whyJoin: "",
  buildIdea: "",
  difficultSubject: "",
  helpingOthers: "",
  communityLongTerm: "",
  futureContribution: "",
  contributeToExperience: "",
  needsFinancialSupport: "",
  financialSupportReason: "",
  conditions: "",
  extraInfo: "",
  resumeName: "",
};

const personalStepFields: Array<keyof ApplyFormData> = [
  "fullName",
  "email",
  "phone",
  "currentSchool",
  "academicYear",
  "classOrMajor",
  "hometown",
  "permanentAddress",
  "academicAchievements",
  "teacherName",
  "teacherContact",
];

const questionStepFields: Array<keyof ApplyFormData> = [
  "whyJoin",
  "buildIdea",
  "difficultSubject",
  "helpingOthers",
  "communityLongTerm",
  "futureContribution",
  "contributeToExperience",
  "needsFinancialSupport",
];

const labelClasses =
  "font-lexend text-[1rem] font-semibold text-[#111111] md:text-[1.05rem]";

function getStepErrors(step: StepId, data: ApplyFormData) {
  const errors: Partial<Record<keyof ApplyFormData, string>> = {};
  const fields = step === "personal" ? personalStepFields : questionStepFields;

  fields.forEach((field) => {
    if (!String(data[field]).trim()) {
      errors[field] = "Câu trả lời này không được để trống.";
    }
  });

  if (
    step === "questions" &&
    data.needsFinancialSupport === "Có" &&
    !data.financialSupportReason.trim()
  ) {
    errors.financialSupportReason = "Câu trả lời này không được để trống.";
  }

  if (
    data.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    errors.email = "Vui lòng nhập địa chỉ email hợp lệ.";
  }

  return errors;
}

function mergeStoredFormData(raw: string | null) {
  if (!raw) {
    return defaultFormData;
  }

  try {
    return {
      ...defaultFormData,
      ...(JSON.parse(raw) as Partial<ApplyFormData>),
    };
  } catch {
    return defaultFormData;
  }
}

function FormStepPill({
  stepNumber,
  label,
  active,
  completed = false,
}: {
  stepNumber: number;
  label: string;
  active: boolean;
  completed?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 items-center gap-2 rounded-full px-2 py-1.5 transition-colors duration-300 sm:gap-3 sm:px-3 sm:py-2 ${
        active || completed ? "text-[#2D8BBA]" : "text-[#B9C3CF]"
      }`}
    >
      <span
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-lexend text-[0.85rem] font-bold sm:h-8 sm:w-8 sm:text-[0.95rem] ${
          active || completed
            ? "bg-[#2D8BBA] text-white"
            : "bg-[#D9DEE7] text-white"
        }`}
      >
        {completed ? (
          <HiCheck className="text-[1rem] sm:text-[1.2rem]" />
        ) : (
          stepNumber
        )}
      </span>
      <span className="min-w-0 font-lexend text-[0.84rem] font-semibold leading-[1.2] sm:text-[1rem]">
        {label}
      </span>
    </div>
  );
}

function ConfirmModal({
  open,
  title,
  description,
  confirmLabel,
  onConfirm,
  onCancel,
  confirmDisabled = false,
}: {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmDisabled?: boolean;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#082635]/38 px-4 backdrop-blur-[3px]">
      <div className="w-full max-w-[520px] rounded-[28px] bg-white p-6 shadow-[0_30px_80px_rgba(8,38,53,0.22)] md:p-8">
        <div className="space-y-3 text-center">
          <h2 className="font-space-grotesk text-[1.8rem] font-bold uppercase tracking-[-0.03em] text-[#04536E] md:text-[2.2rem]">
            {title}
          </h2>
          <p className="font-lexend text-[1rem] leading-[1.8] text-[#5B6671]">
            {description}
          </p>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PillButton
            label="Hủy"
            onClick={onCancel}
            className="min-h-[48px] min-w-[160px] px-6 py-3 font-space-grotesk text-[1rem] font-bold uppercase"
          />
          <PillButton
            label={confirmLabel}
            onClick={onConfirm}
            isActive
            disabled={confirmDisabled}
            className="min-h-[48px] min-w-[160px] px-6 py-3 font-space-grotesk text-[1rem] font-bold uppercase"
          />
        </div>
      </div>
    </div>
  );
}

function SuccessCelebration() {
  const confetti = [
    { left: "10%", delay: "0ms", duration: "4.8s", color: "#2D8BBA" },
    { left: "18%", delay: "380ms", duration: "5.4s", color: "#7FC8EF" },
    { left: "29%", delay: "620ms", duration: "4.4s", color: "#F2A200" },
    { left: "41%", delay: "180ms", duration: "5.6s", color: "#56B78F" },
    { left: "57%", delay: "520ms", duration: "4.9s", color: "#2D8BBA" },
    { left: "69%", delay: "260ms", duration: "5.3s", color: "#BDEBFF" },
    { left: "82%", delay: "760ms", duration: "4.7s", color: "#F2A200" },
    { left: "90%", delay: "120ms", duration: "5.1s", color: "#56B78F" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-[8%] top-0 h-28 blur-2xl" />

      {confetti.map((piece, index) => (
        <span
          key={`${piece.left}-${index}`}
          className="apply-success-confetti"
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
          }}
        />
      ))}
    </div>
  );
}

function AutoSaveIndicator({
  state,
  submitted,
}: {
  state: SaveState;
  submitted: boolean;
}) {
  const label = submitted
    ? "Đã nộp đơn"
    : state === "saving"
      ? "Tự động lưu..."
      : state === "saved"
        ? "Đã lưu nháp"
        : "Sẵn sàng lưu";

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E9F5] bg-white/90 px-3 py-1.5 text-[0.86rem] text-[#587489] shadow-[0_10px_24px_rgba(45,139,186,0.08)]">
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          submitted
            ? "bg-[#2D8BBA]"
            : state === "saving"
              ? "animate-pulse bg-[#f2a200]"
              : "bg-[#56b78f]"
        }`}
      />
      <span className="font-lexend">{label}</span>
    </div>
  );
}

function QuestionHeading({
  label,
  required = false,
  description,
}: {
  label: string;
  required?: boolean;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <label className={labelClasses}>
        {label}
        {required ? <span className="ml-1 text-[#FF5C39]">*</span> : null}
      </label>
      {description ? (
        <p className="font-lexend text-[0.98rem] leading-[1.7] text-[#5F6772]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  description,
  disabled = false,
  multiline = false,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  error?: string;
  description?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
}) {
  const baseClasses = `mt-4 w-full rounded-[18px] border bg-white px-5 font-lexend text-[1rem] text-[#263341] outline-none transition-[border-color,box-shadow,background-color,color] duration-200 placeholder:text-[#B9B9B9] ${
    disabled
      ? "pointer-events-none cursor-default select-none border-[#E2E8EE] bg-[#F3F7FB] text-[#40474F] caret-transparent shadow-none opacity-80"
      : error
        ? "border-[#FF9A72] shadow-[0_0_0_2px_rgba(255,154,114,0.12)] focus:border-[#FF7B45] focus:shadow-[0_0_0_3px_rgba(255,123,69,0.16)]"
        : "border-[#D7DCE1] shadow-[0_4px_12px_rgba(15,37,54,0.04)] focus:border-[#4AA8D6] focus:shadow-[0_0_0_3px_rgba(74,168,214,0.16)]"
  }`;

  return (
    <div className="space-y-3" data-error-target={error ? "true" : "false"}>
      <QuestionHeading
        label={label}
        required={required}
        description={description}
      />
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          readOnly={disabled}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          rows={rows}
          className={`${baseClasses} min-h-[148px] resize-y py-4`}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          readOnly={disabled}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`${baseClasses} h-[56px]`}
        />
      )}
      {error ? (
        <p className="font-lexend text-[0.95rem] text-[#FF6E3D]">{error}</p>
      ) : null}
    </div>
  );
}

function RadioField({
  label,
  required = false,
  value,
  onChange,
  options,
  error,
  disabled = false,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-4" data-error-target={error ? "true" : "false"}>
      <QuestionHeading label={label} required={required} />
      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => {
          const selected = value === option;

          return (
            <button
              type="button"
              key={option}
              onClick={() => {
                if (!disabled) {
                  onChange(option);
                }
              }}
              disabled={disabled}
              aria-pressed={selected}
              className={`flex items-center gap-3 rounded-[16px] px-1 py-1 text-left transition-colors duration-200 ${
                disabled
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-pointer hover:bg-[#F7FBFF]"
              }`}
            >
              <span
                className={`grid h-[28px] w-[28px] place-items-center rounded-full border transition-all duration-200 ${
                  selected
                    ? "border-[#2D8BBA] ring-2 ring-[#7FC8EF]/70 ring-offset-1"
                    : "border-[#E0E5EA]"
                }`}
              >
                <span
                  className={`rounded-full transition-all duration-200 ${
                    selected
                      ? "h-[16px] w-[16px] border-2 border-white bg-[#2D8BBA]"
                      : "h-[14px] w-[14px] bg-transparent"
                  }`}
                />
              </span>
              <span className="font-lexend text-[1rem] text-[#40474F]">
                {option}
              </span>
            </button>
          );
        })}
      </div>
      {error ? (
        <p className="font-lexend text-[0.95rem] text-[#FF6E3D]">{error}</p>
      ) : null}
    </div>
  );
}

function StepSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[32px] bg-white px-5 py-7 shadow-[0_16px_40px_rgba(45,139,186,0.18)] md:px-10 md:py-10">
      <div className="mb-8 text-center md:mb-10">
        <h1 className="font-space-grotesk text-[1.8rem] font-bold uppercase leading-none tracking-[-0.04em] text-[#04536E] md:text-[2.5rem]">
          {title}
        </h1>
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function scrollToFirstError() {
  window.requestAnimationFrame(() => {
    const firstError = document.querySelector(
      "[data-error-target='true']",
    ) as HTMLElement | null;

    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

export function ApplyFormFlow() {
  const [formData, setFormData] = useState<ApplyFormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState<StepId>("personal");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [hasMounted, setHasMounted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ApplyFormData, string>>
  >({});
  const [submitted, setSubmitted] = useState<SubmittedPayload | null>(null);
  const [showSubmittedReview, setShowSubmittedReview] = useState(false);
  const [confirmAction, setConfirmAction] = useState<ConfirmAction>(null);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setHasMounted(true);

      const storedDraft = mergeStoredFormData(
        window.localStorage.getItem(DRAFT_STORAGE_KEY),
      );
      const storedSubmitted = window.localStorage.getItem(
        SUBMITTED_STORAGE_KEY,
      );

      setFormData(storedDraft);

      if (storedSubmitted) {
        try {
          const parsed = JSON.parse(storedSubmitted) as SubmittedPayload;
          setSubmitted(parsed);
          setFormData({ ...defaultFormData, ...parsed.data });
        } catch {
          window.localStorage.removeItem(SUBMITTED_STORAGE_KEY);
        }
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!hasMounted || submitted) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
      setSaveState("saved");
    }, 450);

    return () => window.clearTimeout(timeoutId);
  }, [formData, hasMounted, submitted]);

  useEffect(() => {
    if (!confirmAction) {
      return;
    }

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    const preventKeyScroll = (event: KeyboardEvent) => {
      const blockedKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];

      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, [confirmAction]);

  const canShowReview = useMemo(
    () => Boolean(submitted && showSubmittedReview),
    [submitted, showSubmittedReview],
  );

  function updateField<Key extends keyof ApplyFormData>(
    field: Key,
    value: ApplyFormData[Key],
  ) {
    setSaveState("saving");
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function handleNextStep() {
    const nextErrors = getStepErrors("personal", formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitError("");
      scrollToFirstError();
      return;
    }

    setSubmitError("");
    setErrors({});
    setCurrentStep("questions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    const nextErrors = {
      ...getStepErrors("personal", formData),
      ...getStepErrors("questions", formData),
    };

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setCurrentStep("questions");
      setSubmitError("");
      scrollToFirstError();
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        submittedAt?: string;
      };

      if (!response.ok || !payload.ok) {
        throw new Error(
          payload.message ?? "Unable to submit the application right now.",
        );
      }

      const nextSubmitted: SubmittedPayload = {
        submittedAt: payload.submittedAt ?? new Date().toISOString(),
        data: formData,
      };

      window.localStorage.setItem(
        SUBMITTED_STORAGE_KEY,
        JSON.stringify(nextSubmitted),
      );
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
      setSubmitted(nextSubmitted);
      setShowSubmittedReview(false);
      setSaveState("saved");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit the application right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleStartNewForm() {
    window.localStorage.removeItem(SUBMITTED_STORAGE_KEY);
    window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    setSubmitted(null);
    setShowSubmittedReview(false);
    setFormData(defaultFormData);
    setErrors({});
    setCurrentStep("personal");
    setSaveState("idle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activeData = submitted?.data ?? formData;
  const isReadOnly = canShowReview;
  const isPersonalStepCompleted = currentStep === "questions" || isReadOnly;

  return (
    <section className="py-10 pb-16 md:py-14 md:pb-20">
      <div className="container">
        <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/apply"
            className="inline-flex w-fit items-center gap-2 font-lexend text-[1rem] font-semibold text-[#2D8BBA] transition-colors duration-200 hover:text-[#04536E]"
          >
            <HiArrowLeft className="text-[1.1rem]" />
            <span>Quay lại trang đăng ký</span>
          </Link>

          <div className="flex flex-col items-start gap-3 md:items-end">
            {!submitted ? (
              <AutoSaveIndicator state={saveState} submitted={false} />
            ) : (
              <AutoSaveIndicator state="saved" submitted />
            )}
            {!submitted ? (
              <div className="rounded-full border border-[#BFE1F2] bg-white p-1 shadow-[0_18px_42px_rgba(45,139,186,0.08)]">
                <div className="flex items-center gap-1">
                  <FormStepPill
                    stepNumber={1}
                    label="Thông tin cá nhân"
                    active={currentStep === "personal"}
                    completed={
                      isPersonalStepCompleted && currentStep !== "personal"
                    }
                  />
                  <div className="h-px w-8 bg-[#D6DEE7]" />
                  <FormStepPill
                    stepNumber={2}
                    label="Trả lời câu hỏi"
                    active={currentStep === "questions"}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {submitted && !showSubmittedReview ? (
          <div className="relative mx-auto max-w-[960px] overflow-hidden rounded-[34px] bg-white px-6 py-10 text-center shadow-[0_24px_64px_rgba(45,139,186,0.12)] md:px-10 md:py-16">
            <SuccessCelebration />
            <div className="relative z-[1]">
              <h1 className="font-space-grotesk text-[2.8rem] font-bold uppercase leading-none tracking-[-0.04em] text-[#04536E] md:text-[4.6rem]">
                Đã nhận đơn
              </h1>
              <div className="mx-auto my-8 flex items-center justify-center">
                <Image
                  src="/images/illustrations/submit.svg"
                  alt="Application submitted"
                  width={260}
                  height={260}
                  loading="eager"
                  className="h-[170px] w-[170px] object-contain md:h-[240px] md:w-[240px]"
                />
              </div>
              <p className="mx-auto max-w-[780px] font-lexend text-[1.08rem] leading-[1.8] text-[#4D5761] md:text-[1.22rem]">
                Cảm ơn bạn, tụi mình đã nhận đơn đăng ký tham gia SEAS 2026.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PillButton
                  label="Nộp đơn mới"
                  onClick={() => setConfirmAction("reset")}
                  className="min-h-[48px] min-w-[220px] px-5 py-3 font-space-grotesk text-[1rem] font-bold uppercase"
                />
                <PillButton
                  label="Xem lại đơn đã nộp"
                  isActive
                  onClick={() => setShowSubmittedReview(true)}
                  className="min-h-[48px] min-w-[220px] px-5 py-3 font-space-grotesk text-[1rem] font-bold uppercase"
                />
              </div>
            </div>
          </div>
        ) : null}

        {(!submitted || canShowReview) && (
          <article className="mx-auto max-w-[800px]">
            {(currentStep === "personal" || isReadOnly) && (
              <StepSection title="1. Thông tin cá nhân">
                <TextField
                  label="Họ Tên"
                  required
                  value={activeData.fullName}
                  onChange={(value) => updateField("fullName", value)}
                  placeholder="Nhập đầy đủ tên của bạn"
                  error={errors.fullName}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Email"
                  required
                  value={activeData.email}
                  onChange={(value) => updateField("email", value)}
                  placeholder="Nhập email của bạn"
                  error={errors.email}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Số Điện Thoại"
                  required
                  value={activeData.phone}
                  onChange={(value) => updateField("phone", value)}
                  placeholder="Nhập số điện thoại của bạn"
                  error={errors.phone}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Trường học hiện tại (THPT hoặc Đại Học)"
                  required
                  value={activeData.currentSchool}
                  onChange={(value) => updateField("currentSchool", value)}
                  placeholder="Nhập tên trường hiện tại"
                  error={errors.currentSchool}
                  disabled={isReadOnly}
                />
                <RadioField
                  label="Năm học"
                  required
                  value={activeData.academicYear}
                  onChange={(value) => updateField("academicYear", value)}
                  options={["10", "11", "12", "ĐH Năm 1", "ĐH Năm 2"]}
                  error={errors.academicYear}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Lớp học (đối với THPT) hoặc chuyên ngành (đối với Đại Học)"
                  required
                  value={activeData.classOrMajor}
                  onChange={(value) => updateField("classOrMajor", value)}
                  placeholder="Nhập lớp học hoặc chuyên ngành"
                  error={errors.classOrMajor}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Quê Quán"
                  required
                  value={activeData.hometown}
                  onChange={(value) => updateField("hometown", value)}
                  placeholder="Nhập quê quán của bạn"
                  error={errors.hometown}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Địa Chỉ Thường Trú"
                  required
                  value={activeData.permanentAddress}
                  onChange={(value) => updateField("permanentAddress", value)}
                  placeholder="Nhập địa chỉ thường trú"
                  error={errors.permanentAddress}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Thành tích học tập"
                  required
                  description="Đối với THPT: Điểm của các môn học mà bạn tự tin nhất từ bất kỳ chương trình học nào (THPT, AP, IB, etc). Đối với Đại Học: Điểm tổng kết của các môn học mà các bạn cho là liên quan tới chương trình."
                  value={activeData.academicAchievements}
                  onChange={(value) =>
                    updateField("academicAchievements", value)
                  }
                  placeholder="Nhập câu trả lời của bạn"
                  error={errors.academicAchievements}
                  multiline
                  rows={7}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Họ tên giáo viên (BTC sẽ liên lạc với giáo viên nếu cần thiết)"
                  required
                  value={activeData.teacherName}
                  onChange={(value) => updateField("teacherName", value)}
                  placeholder="Nhập câu trả lời của bạn"
                  error={errors.teacherName}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Email hoặc/và số điện thoại giáo viên"
                  required
                  value={activeData.teacherContact}
                  onChange={(value) => updateField("teacherContact", value)}
                  placeholder="Nhập câu trả lời của bạn"
                  error={errors.teacherContact}
                  disabled={isReadOnly}
                />
                <TextField
                  label="Giải thưởng học thuật hoặc hoạt động ngoại khóa"
                  description="(Không bắt buộc)"
                  value={activeData.awards}
                  onChange={(value) => updateField("awards", value)}
                  placeholder="Nhập câu trả lời của bạn"
                  multiline
                  rows={7}
                  disabled={isReadOnly}
                />
              </StepSection>
            )}

            {(currentStep === "questions" || isReadOnly) && (
              <div className={isReadOnly ? "mt-8" : ""}>
                <StepSection title="2. Trả lời câu hỏi">
                  <TextField
                    label="Tại sao bạn muốn tham gia chương trình? (300-500 từ)"
                    required
                    value={activeData.whyJoin}
                    onChange={(value) => updateField("whyJoin", value)}
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.whyJoin}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Nếu SEAS cung cấp cho bạn mọi nguồn lực để biến một ý tưởng thành hiện thực, bạn muốn phát minh ra điều gì? (không giới hạn từ)"
                    required
                    value={activeData.buildIdea}
                    onChange={(value) => updateField("buildIdea", value)}
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.buildIdea}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Kể về một lần bạn phải học một kiến thức hoặc môn học khó. (100-200 từ)"
                    required
                    value={activeData.difficultSubject}
                    onChange={(value) => updateField("difficultSubject", value)}
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.difficultSubject}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Hãy kể về một lần bạn chủ động giúp đỡ người khác học, tham gia xây dựng một hoạt động chung, hoặc đóng góp cho cộng đồng xung quanh mình. (100-200 từ)"
                    required
                    value={activeData.helpingOthers}
                    onChange={(value) => updateField("helpingOthers", value)}
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.helpingOthers}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Điều gì khiến bạn muốn gắn bó lâu dài với một cộng đồng học tập như SEAS, thay vì chỉ tham gia một lần? (100-200 từ)"
                    required
                    value={activeData.communityLongTerm}
                    onChange={(value) =>
                      updateField("communityLongTerm", value)
                    }
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.communityLongTerm}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Nếu có cơ hội quay lại SEAS trong tương lai với vai trò trợ giảng, mentor, hoặc thành viên ban tổ chức, bạn muốn đóng góp điều gì? Vì sao? (100-200 từ)"
                    required
                    value={activeData.futureContribution}
                    onChange={(value) =>
                      updateField("futureContribution", value)
                    }
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.futureContribution}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Ngoài việc học hỏi, bạn nghĩ mình có thể đóng góp gì cho trải nghiệm chung của các bạn khác tại SEAS? (100-200 từ)"
                    required
                    value={activeData.contributeToExperience}
                    onChange={(value) =>
                      updateField("contributeToExperience", value)
                    }
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.contributeToExperience}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <RadioField
                    label="Bạn có cần phải hỗ trợ tài chính để di chuyển tới trường hè ở Đồng Hới, Quảng Trị không?"
                    required
                    value={activeData.needsFinancialSupport}
                    onChange={(value) =>
                      updateField(
                        "needsFinancialSupport",
                        value as FinancialSupportValue,
                      )
                    }
                    options={["Có", "Không"]}
                    error={errors.needsFinancialSupport}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Nếu bạn cần phải hỗ trợ tài chính, giải thích tại sao."
                    value={activeData.financialSupportReason}
                    onChange={(value) =>
                      updateField("financialSupportReason", value)
                    }
                    placeholder="Nhập câu trả lời của bạn"
                    error={errors.financialSupportReason}
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Bạn có những điều kiện hoặc khó khăn nào có thể ảnh hưởng đến việc tham gia đầy đủ chương trình không? (ví dụ: tài chính gia đình, di chuyển, thiết bị, sức khỏe, ngôn ngữ...)"
                    value={activeData.conditions}
                    onChange={(value) => updateField("conditions", value)}
                    placeholder="Nhập câu trả lời của bạn"
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />
                  <TextField
                    label="Trong ô dưới đây có thể chia sẻ thông tin thêm để SEAS biết rõ hơn về bạn. Bạn có thể chia sẻ các bài báo về bạn, các bài báo bạn viết, hoặc các hoạt động tổ chức mà bạn đã tham gia, các dự án khoa học mà bạn đã từng làm."
                    value={activeData.extraInfo}
                    onChange={(value) => updateField("extraInfo", value)}
                    placeholder="Nhập câu trả lời của bạn"
                    multiline
                    rows={7}
                    disabled={isReadOnly}
                  />

                  <TextField
                    label="Hồ sơ (CV/Resume)"
                    description="(Không bắt buộc)"
                    value={activeData.resumeName}
                    onChange={(value) => updateField("resumeName", value)}
                    placeholder="Dán link CV/Resume của bạn (Google Drive, website cá nhân...)"
                    disabled={isReadOnly}
                  />
                </StepSection>
              </div>
            )}

            <div className="mt-6 flex flex-row items-center justify-center gap-3 md:mt-8 sm:gap-4">
              {isReadOnly ? (
                <>
                  <Link href="/apply" className="inline-flex">
                    <PillButton
                      label="Quay lại trang đăng ký"
                      className="min-h-[50px] min-w-0 px-4 py-3 font-space-grotesk text-[0.9rem] font-bold uppercase sm:min-w-[180px] sm:px-7 sm:text-[1rem]"
                    />
                  </Link>
                </>
              ) : currentStep === "personal" ? (
                <>
                  <Link href="/apply" className="inline-flex">
                    <PillButton
                      label="Quay lại"
                      className="min-h-[50px] min-w-0 px-4 py-3 font-space-grotesk text-[0.9rem] font-bold uppercase sm:min-w-[180px] sm:px-7 sm:text-[1rem]"
                    />
                  </Link>
                  <PillButton
                    isActive
                    label="Tiếp tục"
                    onClick={handleNextStep}
                    className="min-h-[50px] min-w-0 px-4 py-3 font-space-grotesk text-[0.9rem] font-bold uppercase sm:min-w-[180px] sm:px-7 sm:text-[1rem]"
                  />
                </>
              ) : (
                <>
                  <PillButton
                    label="Quay lại"
                    onClick={() => {
                      setCurrentStep("personal");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="min-h-[50px] min-w-0 px-4 py-3 font-space-grotesk text-[0.9rem] font-bold uppercase sm:min-w-[180px] sm:px-7 sm:text-[1rem]"
                  />
                  <PillButton
                    label="Nộp đơn"
                    isActive
                    onClick={() => setConfirmAction("submit")}
                    className="min-h-[50px] min-w-0 px-4 py-3 font-space-grotesk text-[0.9rem] font-bold uppercase sm:min-w-[180px] sm:px-7 sm:text-[1rem]"
                  />
                </>
              )}
            </div>
            {submitError ? (
              <p className="mt-5 text-center font-lexend text-[0.98rem] text-[#FF6E3D]">
                {submitError}
              </p>
            ) : null}
          </article>
        )}
      </div>

      <ConfirmModal
        open={confirmAction === "submit"}
        confirmDisabled={isSubmitting}
        title="Xác nhận nộp đơn"
        description="Bạn có chắc chắn muốn nộp đơn không? Hãy kiểm tra lại câu trả lời của bạn trước khi nộp."
        confirmLabel="Nộp đơn"
        onCancel={() => setConfirmAction(null)}
        onConfirm={async () => {
          await handleSubmit();
          setConfirmAction(null);
        }}
      />

      <ConfirmModal
        open={confirmAction === "reset"}
        title="Xác nhận nộp đơn mới"
        description="Bạn có chắc chắn muốn tạo đơn mới không? Hệ thống sẽ xóa bản nháp cũ và đặt lại biểu mẫu mới."
        confirmLabel="Nộp đơn mới"
        onCancel={() => setConfirmAction(null)}
        onConfirm={() => {
          setConfirmAction(null);
          handleStartNewForm();
        }}
      />
    </section>
  );
}
