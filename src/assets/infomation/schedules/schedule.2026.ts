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

export const weekSchedule2026: DaySchedule[] = [
  {
    day: 'Thứ 2',
    date: '28/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-orange-500' },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-pink-500' },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: 'bg-blue-500' },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-white' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 3',
    date: '29/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-orange-500' },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-pink-500' },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: 'bg-blue-500' },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-white' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 4',
    date: '30/7',
    events: [
      { time: '8:00 - 9:00', title: '', color: 'bg-white' },
      { time: '9:00 - 10:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '10:00 - 11:00', title: '', color: 'bg-white' },
      { time: '11:00 - 12:00', title: '', color: 'bg-green-200' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Hoạt động: Công viên Động Mỹ Biển Nhật Lệ', color: 'bg-blue-200' },
      { time: '3:00 - 4:00', title: 'Hoạt động: Công viên Động Mỹ Biển Nhật Lệ', color: 'bg-blue-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-green-200' }
    ]
  },
  {
    day: 'Thứ 5',
    date: '31/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '9:00 - 10:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '10:00 - 11:00', title: 'Bài giảng khách mời 3', color: 'bg-pink-200' },
      { time: '11:00 - 12:00', title: 'Bài giảng khách mời 4 / Giao lưu hỏi & đáp', color: 'bg-pink-200' },
      { time: '1:00 - 2:00', title: '', color: 'bg-white' },
      { time: '2:00 - 3:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-green-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-green-200' }
    ]
  },
  {
    day: 'Thứ 6',
    date: '1/8',
    events: [
      { time: '8:00 - 9:00', title: '', color: 'bg-amber-100' },
      { time: '9:00 - 10:00', title: '', color: 'bg-amber-100' },
      { time: '10:00 - 11:00', title: 'Thuyết trình dự án nhóm', color: 'bg-amber-100' },
      { time: '11:00 - 12:00', title: 'Thuyết trình dự án nhóm', color: 'bg-amber-100' },
      { time: '1:00 - 2:00', title: 'Thảo luận', color: 'bg-orange-100' },
      { time: '2:00 - 3:00', title: 'Thảo luận', color: 'bg-orange-100' },
      { time: '3:00 - 4:00', title: 'Lễ tổng kết', color: 'bg-purple-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  }
]
