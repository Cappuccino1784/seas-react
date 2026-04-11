export type ApplicationPayload = {
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
  needsFinancialSupport: string;
  financialSupportReason: string;
  conditions: string;
  extraInfo: string;
  resumeName: string;
};

export type ApplicationRow = {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone: string;
  current_school: string;
  academic_year: string;
  class_or_major: string;
  hometown: string;
  permanent_address: string;
  academic_achievements: string;
  teacher_name: string;
  teacher_contact: string;
  awards: string;
  why_join: string;
  build_idea: string;
  difficult_subject: string;
  helping_others: string;
  community_long_term: string;
  future_contribution: string;
  contribute_to_experience: string;
  needs_financial_support: string;
  financial_support_reason: string;
  conditions: string;
  extra_info: string;
  resume_name: string;
  submitted_at: string;
};

const requiredStringFields: Array<keyof ApplicationPayload> = [
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
  "whyJoin",
  "buildIdea",
  "difficultSubject",
  "helpingOthers",
  "communityLongTerm",
  "futureContribution",
  "contributeToExperience",
  "needsFinancialSupport",
];

export const applicationExportColumns: Array<{
  key: keyof ApplicationRow;
  label: string;
}> = [
  { key: "created_at", label: "Thời gian tạo bản ghi" },
  { key: "submitted_at", label: "Thời gian nộp đơn" },
  { key: "full_name", label: "Họ Tên" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Số Điện Thoại" },
  {
    key: "current_school",
    label: "Trường học hiện tại (THPT hoặc Đại Học)",
  },
  { key: "academic_year", label: "Năm học" },
  {
    key: "class_or_major",
    label: "Lớp học (đối với THPT) hoặc chuyên ngành (đối với Đại Học)",
  },
  { key: "hometown", label: "Quê Quán" },
  { key: "permanent_address", label: "Địa Chỉ Thường Trú" },
  {
    key: "academic_achievements",
    label:
      "Thành tích học tập (Đối với THPT: Điểm của các môn học mà bạn tự tin nhất từ bất kỳ chương trình học nào; Đối với Đại Học: Điểm tổng kết của các môn học liên quan tới chương trình)",
  },
  {
    key: "teacher_name",
    label:
      "Họ tên giáo viên (BTC sẽ liên lạc với giáo viên nếu cần thiết)",
  },
  {
    key: "teacher_contact",
    label: "Email hoặc/và số điện thoại giáo viên",
  },
  {
    key: "awards",
    label: "Giải thưởng học thuật hoặc hoạt động ngoại khóa",
  },
  {
    key: "why_join",
    label: "Tại sao bạn muốn tham gia chương trình? (300-500 từ)",
  },
  {
    key: "build_idea",
    label:
      "Nếu SEAS cung cấp cho bạn mọi nguồn lực để biến một ý tưởng thành hiện thực, bạn muốn phát minh ra điều gì? (không giới hạn từ)",
  },
  {
    key: "difficult_subject",
    label:
      "Kể về một lần bạn phải học một kiến thức hoặc môn học khó. (100-200 từ)",
  },
  {
    key: "helping_others",
    label:
      "Hãy kể về một lần bạn chủ động giúp đỡ người khác học, tham gia xây dựng một hoạt động chung, hoặc đóng góp cho cộng đồng xung quanh mình. (100-200 từ)",
  },
  {
    key: "community_long_term",
    label:
      "Điều gì khiến bạn muốn gắn bó lâu dài với một cộng đồng học tập như SEAS, thay vì chỉ tham gia một lần? (100-200 từ)",
  },
  {
    key: "future_contribution",
    label:
      "Nếu có cơ hội quay lại SEAS trong tương lai với vai trò trợ giảng, mentor, hoặc thành viên ban tổ chức, bạn muốn đóng góp điều gì? Vì sao? (100-200 từ)",
  },
  {
    key: "contribute_to_experience",
    label:
      "Ngoài việc học hỏi, bạn nghĩ mình có thể đóng góp gì cho trải nghiệm chung của các bạn khác tại SEAS? (100-200 từ)",
  },
  {
    key: "needs_financial_support",
    label:
      "Bạn có cần phải hỗ trợ tài chính để di chuyển tới trường hè ở Đồng Hới, Quảng Trị không?",
  },
  {
    key: "financial_support_reason",
    label: "Nếu bạn cần phải hỗ trợ tài chính, giải thích tại sao.",
  },
  {
    key: "conditions",
    label:
      "Bạn có những điều kiện hoặc khó khăn nào có thể ảnh hưởng đến việc tham gia đầy đủ chương trình không? (ví dụ: tài chính gia đình, di chuyển, thiết bị, sức khỏe, ngôn ngữ...)",
  },
  {
    key: "extra_info",
    label:
      "Trong ô dưới đây có thể chia sẻ thông tin thêm để SEAS biết rõ hơn về bạn. Bạn có thể chia sẻ các bài báo về bạn, các bài báo bạn viết, hoặc các hoạt động tổ chức mà bạn đã tham gia, các dự án khoa học mà bạn đã từng làm.",
  },
  { key: "resume_name", label: "Hồ sơ (CV/Resume) - Link" },
];

export function normalizeApplicationPayload(
  payload: Partial<ApplicationPayload>,
): ApplicationPayload {
  return {
    fullName: String(payload.fullName ?? "").trim(),
    email: String(payload.email ?? "").trim(),
    phone: String(payload.phone ?? "").trim(),
    currentSchool: String(payload.currentSchool ?? "").trim(),
    academicYear: String(payload.academicYear ?? "").trim(),
    classOrMajor: String(payload.classOrMajor ?? "").trim(),
    hometown: String(payload.hometown ?? "").trim(),
    permanentAddress: String(payload.permanentAddress ?? "").trim(),
    academicAchievements: String(payload.academicAchievements ?? "").trim(),
    teacherName: String(payload.teacherName ?? "").trim(),
    teacherContact: String(payload.teacherContact ?? "").trim(),
    awards: String(payload.awards ?? "").trim(),
    whyJoin: String(payload.whyJoin ?? "").trim(),
    buildIdea: String(payload.buildIdea ?? "").trim(),
    difficultSubject: String(payload.difficultSubject ?? "").trim(),
    helpingOthers: String(payload.helpingOthers ?? "").trim(),
    communityLongTerm: String(payload.communityLongTerm ?? "").trim(),
    futureContribution: String(payload.futureContribution ?? "").trim(),
    contributeToExperience: String(payload.contributeToExperience ?? "").trim(),
    needsFinancialSupport: String(payload.needsFinancialSupport ?? "").trim(),
    financialSupportReason: String(payload.financialSupportReason ?? "").trim(),
    conditions: String(payload.conditions ?? "").trim(),
    extraInfo: String(payload.extraInfo ?? "").trim(),
    resumeName: String(payload.resumeName ?? "").trim(),
  };
}

export function validateApplicationPayload(payload: ApplicationPayload) {
  const missingFields = requiredStringFields.filter((field) => !payload[field]);

  if (
    payload.needsFinancialSupport.toLowerCase() === "co" &&
    !payload.financialSupportReason
  ) {
    missingFields.push("financialSupportReason");
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return {
      ok: false as const,
      message: "Please provide a valid email address.",
      missingFields,
    };
  }

  if (missingFields.length > 0) {
    return {
      ok: false as const,
      message: "Please complete all required fields before submitting.",
      missingFields,
    };
  }

  return {
    ok: true as const,
    missingFields: [] as string[],
  };
}

export function toApplicationRow(payload: ApplicationPayload): ApplicationRow {
  return {
    full_name: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    current_school: payload.currentSchool,
    academic_year: payload.academicYear,
    class_or_major: payload.classOrMajor,
    hometown: payload.hometown,
    permanent_address: payload.permanentAddress,
    academic_achievements: payload.academicAchievements,
    teacher_name: payload.teacherName,
    teacher_contact: payload.teacherContact,
    awards: payload.awards,
    why_join: payload.whyJoin,
    build_idea: payload.buildIdea,
    difficult_subject: payload.difficultSubject,
    helping_others: payload.helpingOthers,
    community_long_term: payload.communityLongTerm,
    future_contribution: payload.futureContribution,
    contribute_to_experience: payload.contributeToExperience,
    needs_financial_support: payload.needsFinancialSupport,
    financial_support_reason: payload.financialSupportReason,
    conditions: payload.conditions,
    extra_info: payload.extraInfo,
    resume_name: payload.resumeName,
    submitted_at: new Date().toISOString(),
  };
}

function escapeCsvValue(value: string) {
  const normalized = value.replace(/\r?\n/g, "\n");
  return `"${normalized.replace(/"/g, '""')}"`;
}

export function toApplicationsCsv(rows: ApplicationRow[]) {
  const header = applicationExportColumns
    .map((column) => escapeCsvValue(column.label))
    .join(",");
  const lines = rows.map((row) =>
    applicationExportColumns
      .map((column) => escapeCsvValue(String(row[column.key] ?? "")))
      .join(","),
  );

  return [header, ...lines].join("\n");
}
