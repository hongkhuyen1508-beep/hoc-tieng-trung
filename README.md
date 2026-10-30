# Nói tiếng Trung mỗi ngày

Web học giao tiếp tiếng Trung (HSK 1–2) cho người Việt: hội thoại có giọng đọc AI, luyện nói, gọi điện với AI bằng giọng nói, luyện đọc truyện, bài hát, thơ, phim, và tập viết chữ Hán.

Các phần dùng AI chạy bằng khóa Gemini miễn phí của Google (lấy ở https://aistudio.google.com/apikey). Khóa được dán vào trang lúc dùng và chỉ lưu trong trình duyệt, không nằm trong mã nguồn.

- `index.html`: web học
- `goi-ai/`: trang gọi điện bằng giọng nói
- `sudoku/`: Sudoku Bé Vui, sudoku bằng hình cho bé (2x2 đến 9x9), nghe tiếng Việt, Anh hoặc Trung; giọng AI Gemini dùng chung khóa với web học
- `toan-tu-duy/`: Bé Tư Duy (Little Thinkers), câu đố tư duy và toán cho bé 3–7 tuổi (15 trò: đếm hình, quy luật, hình nào khác, nhiều hay ít, cộng trừ, số còn thiếu, đoán bóng, to và nhỏ, xem đồng hồ, hình khối, ghép đôi, hình bí ẩn, vị trí, thứ tự, và chế độ trộn); mặc định tiếng Anh, có thể chọn tiếng Việt; giọng AI dùng chung khóa Gemini
- `tieng-anh/`: Bé Học Tiếng Anh, web học tiếng Anh cho bé 3–9 tuổi với 20 chủ đề, hơn 3.000 từ có phiên âm IPA (chào hỏi, con vật theo nơi sống, rau củ quả, màu sắc và hình khối, số đếm, gia đình, cơ thể, đồ ăn, quần áo, trường học, thời tiết và thiên nhiên, xe cộ, cảm xúc, đồ chơi, nghề nghiệp, nhà của bé, hành động, nơi chốn, thể thao, âm nhạc); mỗi chủ đề có thẻ từ vựng kèm hình, hỏi đáp có câu trả lời mẫu đủ câu, và đố vui 8 câu; giọng AI dùng chung khóa Gemini
- `audio/`, `words/`, `rd/`: giọng đọc tạo sẵn; `hanzi/`: nét chữ Hán (hanzi-writer-data)

## Nguồn phát âm
Phát âm từ vựng HSK dùng bản thu của người bản xứ Yue Tan (dự án Shtooka, qua https://github.com/hugolpz/audio-cmn), giấy phép CC BY-SA. Câu ví dụ và cụm từ dùng giọng đọc AI của Google.
