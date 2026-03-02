export interface ScheduleEvent {
  time: string
  title: string
  color: string
}

export interface DaySchedule {
  day: string
  date: string
  events: ScheduleEvent[]
}

// Schedule Color Constants - Organized by Subject/Event Type
const COLORS = {
  // Academic Subjects
  LINEAR_ALGEBRA: 'bg-[#4DBBC7]',           // Bright cyan-teal for math topics
  PROBABILITY_STATS: 'bg-[#5FC9C3]',        // Light teal-cyan for statistics
  MACHINE_LEARNING: 'bg-[#1B9AAA]',         // Medium teal for ML intro/intermediate
  MACHINE_LEARNING_ADVANCED: 'bg-[#00637E]', // Dark teal for advanced ML
  PYTHON_PROGRAMMING: 'bg-[#76C7C0]',       // Soft teal-green for coding
  
  // Activities & Events
  GUEST_LECTURE: 'bg-[#1B9AAA]',            // Medium teal for special lectures
  PROJECT_INTRO: 'bg-[#2DA8B8]',            // Medium bright teal for project intros
  PROJECT_WORK: 'bg-[#76C7C0]',             // Soft teal-green for group work
  FIELD_TRIP: 'bg-[#B8E6E6]',               // Light cyan for outdoor activities
  PRESENTATION: 'bg-[#D4F1F4]',             // Very light cyan for presentations
  CLOSING_CEREMONY: 'bg-[#9DBEBB]',         // Sage teal for special ceremonies
  
  // Practice & Breaks
  PRACTICE_HOMEWORK: 'bg-[#E8F4F3]',        // Very light mint for practice time
  EMPTY: 'bg-white'                         // White for empty slots
} as const

export const weekSchedule2026: DaySchedule[] = [
  {
    day: 'Thứ 2',
    date: '28/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-[#2DA8B8]' },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-[#2DA8B8]' },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: 'bg-[#1B9AAA]' },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '3:00 - 4:00', title: '', color: 'bg-white' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 3',
    date: '29/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-[#2DA8B8]' },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-[#2DA8B8]' },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: 'bg-[#1B9AAA]' },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '3:00 - 4:00', title: '', color: 'bg-white' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 4',
    date: '30/7',
    events: [
      { time: '8:00 - 9:00', title: '', color: 'bg-white' },
      { time: '9:00 - 10:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '10:00 - 11:00', title: '', color: 'bg-white' },
      { time: '11:00 - 12:00', title: '', color: 'bg-[#76C7C0]' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Hoạt động: Công viên Động Mỹ Biển Nhật Lệ', color: 'bg-[#B8E6E6]' },
      { time: '3:00 - 4:00', title: 'Hoạt động: Công viên Động Mỹ Biển Nhật Lệ', color: 'bg-[#B8E6E6]' },
      { time: '4:00 - 5:00', title: '', color: 'bg-[#76C7C0]' }
    ]
  },
  {
    day: 'Thứ 5',
    date: '31/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '9:00 - 10:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '10:00 - 11:00', title: 'Bài giảng khách mời 3', color: 'bg-[#1B9AAA]' },
      { time: '11:00 - 12:00', title: 'Bài giảng khách mời 4 / Giao lưu hỏi & đáp', color: 'bg-[#1B9AAA]' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Học viên làm dự án nhóm', color: 'bg-[#76C7C0]' },
      { time: '3:00 - 4:00', title: '', color: 'bg-[#76C7C0]' },
      { time: '4:00 - 5:00', title: '', color: 'bg-[#76C7C0]' }
    ]
  },
  {
    day: 'Thứ 6',
    date: '1/8',
    events: [
      { time: '8:00 - 9:00', title: '', color: 'bg-[#D4F1F4]' },
      { time: '9:00 - 10:00', title: '', color: 'bg-[#D4F1F4]' },
      { time: '10:00 - 11:00', title: 'Thuyết trình dự án nhóm', color: 'bg-[#D4F1F4]' },
      { time: '11:00 - 12:00', title: 'Thuyết trình dự án nhóm', color: 'bg-[#D4F1F4]' },
      { time: '1:00 - 2:00', title: 'Thảo luận', color: 'bg-[#B8E6E6]' },
      { time: '2:00 - 3:00', title: 'Thảo luận', color: 'bg-[#B8E6E6]' },
      { time: '3:00 - 4:00', title: 'Lễ tổng kết', color: 'bg-[#9DBEBB]' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  }
]
