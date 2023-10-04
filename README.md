# 20110011_blog
Trong Visual Studio:
Nếu chưa terminal chưa vào folder main thì: cd main
Sử dụng command:  node index.js
- Mở blog trên trình duyệt
http://localhost:5000/posts

*Xài trong terminal (command prompt của máy):
    -Xoá một blog với id (VD:2):
        curl -X DELETE "http://localhost:5000/posts/2"
    - Post một blog mới:
        curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Third post\", \"text\":\"Lololo\"}" "http://localhost:5000/posts"
    -Update một blog (không thay đổi comments):
        curl -X PUT -H "Content-Type: application/json" -d "{\"name\": \"Hello lololol\", \"text\":\"Testing Update\"}" "http://localhost:5000/posts/1"
    -Comment vào một blog:
        curl -X POST -H "Content-Type: application/json" -d "{ \"comment\": \"Testing\"}" "http://localhost:5000/posts/1/comments"
