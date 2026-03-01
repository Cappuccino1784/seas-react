import leAnhVu from "../../images/team/2025/le-anh-vu.jpg";
import nguyenThiHaiYen from "../../images/team/2025/nguyen-thi-hai-yen.jpg";
import vuPhanKhanh from "../../images/team/2025/khanh-vu.jpeg";
import hoangKhoiNguyen from "../../images/team/2025/nguyen-huynh.jpg";
import hoangMinhQuang from "../../images/team/2025/Quang-Hoang.jpg";
import dangCaoCuong from "../../images/team/2025/cuong-dang.jpg";
import haXuanThien from "../../images/team/2025/ha-xuan-thien.jpeg";
import nguyenThanhLuan from "../../images/team/2025/luan-nguyen.jpg";
import tranHaiNam from "../../images/team/2025/nam-tran.jpg";
import huynhVuKhoiNguyen from "../../images/team/2025/nguyen-huynh.jpg";
import ngoHongPhuc from "../../images/team/2025/phuc-ngo.jpg";
import tranTaQuangMinh from "../../images/team/2025/quang-minh.jpeg";
import buiNgocDucThien from "../../images/team/2025/thien-bui.jpg";
import chauNguyenToTrinh from "../../images/team/2025/trinh-chau.jpg";
import phamQuocTrung from "../../images/team/2025/trung-pham.jpg";
import doHoangKhanhLinh from "../../images/team/2025/do-hoang-khanh-linh.jpg";
import hoangNhatMinh from "../../images/team/2025/minh-hoang.jpg";
import buiNguyenThaoNhi from "../../images/team/2025/nhi-bui.jpg";
import nguyenNuThaoVy from "../../images/team/2025/vy-nguyen.jpg";
import voLeYenNhi from "../../images/team/2025/yen-nhi.jpg";

const persons = {
    'le-anh-vu': {
        name: "Lê Anh Vũ",
        title: "Ban tổ chức tại địa phương",
        image: leAnhVu,
        bio: "Thầy Giáo tại Trường Chuyên Võ Nguyên Giáp"
    },
    'nguyen-thi-hai-yen': {
        name: "Nguyễn Thị Hải Yến",
        title: "Ban tổ chức tại địa phương",
        image: nguyenThiHaiYen,
        bio: "Hiệu trưởng tại Trường Chuyên Võ Nguyên Giáp"
    },
    'vu-phan-khanh': {
        name: "Vũ Phan Khánh",
        title: "Trợ Giảng (Teaching Assistant)",
        image: vuPhanKhanh,
        bio: `Sinh viên năm 3, ngành Computer Science chuyên môn AI.`
    },
    'hoang-khoi-nguyen': {
        name: "Hoàng Khôi Nguyên",
        title: "Trợ Giảng (Teaching Assistant)",
        image: hoangKhoiNguyen,
        bio: `Kỹ sư AI tại Fsoft-AIC (AI Engineer, FSoft-AIC). Chuyên Võ Nguyên Giáp 17-20.`
    },
    'hoang-minh-quang': {
        name: "Hoàng Minh Quang",
        title: "Trưởng Marketing (Director of Marketing)",
        image: hoangMinhQuang,
        bio: `Cử nhân Marketing.`
    },
    'dang-cao-cuong': {
        name: "Đặng Cao Cường",
        title: "Trợ Giảng (Teaching Assistant)",
        image: dangCaoCuong,
        bio: "AI Research Engineer, FPT Software, AI Center"
    },
    'ha-xuan-thien': {
        name: "Hà Xuân Thiện",
        title: "Trợ Giảng (Teaching Assistant)",
        image: haXuanThien,
        bio: "🎓 Chuyên Ngành: Cử nhân Khoa Học Máy Tính Chương Trình Tài Năng, Đại học Công nghệ thông tin, ĐHQG TPHCM"
    },
    'nguyen-thanh-luan': {
        name: "Nguyễn Thành Luân",
        title: "Trợ Giảng (Teaching Assistant)",
        image: nguyenThanhLuan,
        bio: "Giảng viên, Đại học Công nghệ Thông tin, ĐHQG-HCM"
    },
    'tran-hai-nam': {
        name: "Trần Hải Nam",
        title: "Trợ Giảng (Teaching Assistant)",
        image: tranHaiNam,
        bio: "Kỹ sư AI tập sự, Viettel Group"
    },
    'huynh-vu-khoi-nguyen': {
        name: "Huỳnh Vũ Khôi Nguyên",
        title: "Trợ Giảng (Teaching Assistant)",
        image: huynhVuKhoiNguyen,
        bio: "Trợ lý nghiên cứu, Centre for Quantum Technologies"
    },
    'ngo-hong-phuc': {
        name: "Ngô Hồng Phúc",
        title: "Trợ Giảng (Teaching Assistant)",
        image: ngoHongPhuc,
        bio: "Research Assistant, MIT"
    },
    'tran-ta-quang-minh': {
        name: "Trần Tạ Quang Minh",
        title: "Trợ Giảng (Teaching Assistant)",
        image: tranTaQuangMinh,
        bio: "🎓 Chuyên Ngành: Cử nhân Trí Tuệ Nhân Tạo từ Đại học Khoa học Tự nhiên, ĐHQG TPHCM"
    },
    'bui-ngoc-duc-thien': {
        name: "Bùi Ngọc Đức Thiện",
        title: "Trợ Giảng (Teaching Assistant)",
        image: buiNgocDucThien,
        bio: "Học bổng Toàn phần Du học cấp 3 United World College (UWC)"
    },
    'chau-nguyen-to-trinh': {
        name: "Châu Nguyễn Tố Trinh",
        title: "Trợ Giảng (Teaching Assistant)",
        image: chauNguyenToTrinh,
        bio: "Sinh viên năm nhất ngành Khoa học máy tính, Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)"
    },
    'pham-quoc-trung': {
        name: "Phạm Quốc Trung",
        title: "Trợ Giảng (Teaching Assistant)",
        image: phamQuocTrung,
        bio: "Kỹ sư tại Vinbrain-Nvidia Vietnam"
    },
    'do-hoang-khanh-linh': {
        name: "Đỗ Hoàng Khánh Lịnh",
        title: "Fundraiser",
        image: doHoangKhanhLinh,
        bio: "Concordia International School Hanoi"
    },
    'hoang-nhat-minh': {
        name: "Hoàng Nhật Minh",
        title: "Graphic Designer",
        image: hoangNhatMinh,
        bio: "Chuyên Võ Nguyên Giáp 24-27"
    },
    'bui-nguyen-thao-nhi': {
        name: "Bùi Nguyễn Thảo Nhi",
        title: "Media, Design & Photographer",
        image: buiNguyenThaoNhi,
        bio: "Chuyên Võ Nguyên Giáp 22-25"
    },
    'nguyen-nu-thao-vy': {
        name: "Nguyễn Nữ Thảo Vy",
        title: "Graphic Designer",
        image: nguyenNuThaoVy,
        bio: "Chuyên Võ Nguyên Giáp 23-26"
    },
    'vo-le-yen-nhi': {
        name: "Võ Lê Yến Nhi",
        title: "Graphic Designer",
        image: voLeYenNhi,
        bio: "Chuyên Võ Nguyên Giáp 23-26"
    }
}

export default persons;
