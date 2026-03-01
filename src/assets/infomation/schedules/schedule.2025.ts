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

export const weekSchedule2025: DaySchedule[] = [
  {
    day: 'Thứ 2',
    date: '21/7',
    events: [
      { time: '8:00 - 9:00', title: 'Lễ chào mừng', color: 'bg-pink-200' },
      { time: '9:00 - 10:00', title: 'Bài giảng khách mời 1', color: 'bg-pink-200' },
      { time: '10:00 - 11:00', title: 'Đại số tuyến tính 1: Cơ bản', color: 'bg-yellow-200' },
      { time: '11:00 - 12:00', title: 'Đại số tuyến tính 2: Biến đổi tuyến tính (Linear transformations)', color: 'bg-yellow-200' },
      { time: '1:00 - 2:00', title: 'Lập trình Python 1', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-yellow-100' },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 1', color: 'bg-yellow-100' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 3',
    date: '22/7',
    events: [
      { time: '8:00 - 9:00', title: 'Đại số tuyến tính 3: Ma trận nghịch đảo (Matrix inversion)', color: 'bg-yellow-200' },
      { time: '9:00 - 10:00', title: 'Đại số tuyến tính 4: Phép phân tích riêng (Eigendecomposition)', color: 'bg-yellow-200' },
      { time: '10:00 - 11:00', title: 'Xác suất thống kê 1: Cơ bản', color: 'bg-green-300' },
      { time: '11:00 - 12:00', title: 'Học máy 1: Giới thiệu', color: 'bg-blue-300' },
      { time: '1:00 - 2:00', title: 'Lập trình Python 2', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-yellow-100' },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 2', color: 'bg-yellow-100' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 4',
    date: '23/7',
    events: [
      { time: '8:00 - 9:00', title: 'Đại số tuyến tính 5: Giải tích ma trận (Matrix calculus)', color: 'bg-yellow-200' },
      { time: '9:00 - 10:00', title: 'Xác suất thống kê 2: Mô hình Thống kê', color: 'bg-green-300' },
      { time: '10:00 - 11:00', title: 'Xác suất thống kê 3: Hồi quy tuyến tính (Linear regression)', color: 'bg-green-300' },
      { time: '11:00 - 12:00', title: 'Học máy 2: Học giám sát (Supervised learning)', color: 'bg-blue-300' },
      { time: '1:00 - 2:00', title: 'Lập trình Python 3', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-yellow-100' },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 3', color: 'bg-yellow-100' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 5',
    date: '24/7',
    events: [
      { time: '8:00 - 9:00', title: 'Đại số tuyến tính 6: Tổng kết & Vi dụ ứng dụng', color: 'bg-yellow-200' },
      { time: '9:00 - 10:00', title: 'Học máy 3: Thuật toán giảm độ dốc (Gradient descent)', color: 'bg-blue-300' },
      { time: '10:00 - 11:00', title: 'Học máy 4: Học không giám sát (Unsupervised learning)', color: 'bg-blue-300' },
      { time: '11:00 - 12:00', title: 'Bài giảng khách mời 2', color: 'bg-pink-200' },
      { time: '1:00 - 2:00', title: 'Lập trình Python 4', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-yellow-100' },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 4', color: 'bg-yellow-100' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  },
  {
    day: 'Thứ 6',
    date: '25/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học máy 5: Mạng thần kinh nhân tạo (Neural networks)', color: 'bg-blue-400' },
      { time: '9:00 - 10:00', title: 'Học máy 6: Tổng kết & Giới thiệu các chủ đề khác', color: 'bg-blue-400' },
      { time: '10:00 - 11:00', title: '', color: 'bg-white' },
      { time: '11:00 - 12:00', title: '', color: 'bg-white' },
      { time: '1:00 - 2:00', title: 'Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng thực tiễn)', color: 'bg-orange-500' },
      { time: '2:00 - 3:00', title: 'Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng thực tiễn)', color: 'bg-orange-500' },
      { time: '3:00 - 4:00', title: 'Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng khoa học)', color: 'bg-blue-500' },
      { time: '4:00 - 5:00', title: 'Học viên lập nhóm', color: 'bg-purple-200' }
    ]
  },
  {
    day: 'Thứ 7',
    date: '26/7',
    events: [
      { time: '8:00 - 9:00', title: '', color: 'bg-blue-100' },
      { time: '9:00 - 10:00', title: '', color: 'bg-blue-100' },
      { time: '10:00 - 11:00', title: '', color: 'bg-blue-100' },
      { time: '11:00 - 12:00', title: 'Chuyến di động Phong Nha', color: 'bg-blue-100' },
      { time: '1:00 - 2:00', title: '', color: 'bg-blue-100' },
      { time: '2:00 - 3:00', title: '', color: 'bg-blue-100' },
      { time: '3:00 - 4:00', title: '', color: 'bg-blue-100' },
      { time: '4:00 - 5:00', title: '', color: 'bg-blue-100' }
    ]
  }
]

export const weekSchedule2025Week2: DaySchedule[] = [
  {
    day: 'Thứ 2',
    date: '28/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-orange-500' },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: 'bg-pink-500' },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: 'bg-blue-500' },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '1:00 - 2:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-green-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-green-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-green-200' }
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
      { time: '1:00 - 2:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-green-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-green-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-green-200' }
    ]
  },
  {
    day: 'Thứ 4',
    date: '30/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '9:00 - 10:00', title: '', color: 'bg-green-200' },
      { time: '10:00 - 11:00', title: '', color: 'bg-green-200' },
      { time: '11:00 - 12:00', title: '', color: 'bg-green-200' },
      { time: '1:00 - 2:00', title: 'Hoạt động: Công viên Động Mỹ Biển Nhật Lệ', color: 'bg-blue-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-blue-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-blue-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-blue-200' }
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
      { time: '1:00 - 2:00', title: 'Học viên làm dự án nhóm', color: 'bg-green-200' },
      { time: '2:00 - 3:00', title: '', color: 'bg-green-200' },
      { time: '3:00 - 4:00', title: '', color: 'bg-green-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-green-200' }
    ]
  },
  {
    day: 'Thứ 6',
    date: '1/8',
    events: [
      { time: '8:00 - 9:00', title: 'Thuyết trình dự án nhóm', color: 'bg-amber-100' },
      { time: '9:00 - 10:00', title: '', color: 'bg-amber-100' },
      { time: '10:00 - 11:00', title: '', color: 'bg-amber-100' },
      { time: '11:00 - 12:00', title: '', color: 'bg-amber-100' },
      { time: '1:00 - 2:00', title: 'Thảo luận', color: 'bg-orange-100' },
      { time: '2:00 - 3:00', title: '', color: 'bg-orange-100' },
      { time: '3:00 - 4:00', title: 'Lễ tổng kết', color: 'bg-purple-200' },
      { time: '4:00 - 5:00', title: '', color: 'bg-white' }
    ]
  }
]
