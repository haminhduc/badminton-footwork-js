﻿# badminton-foottraning-js
Duc's question: ấn nút start lần đầu thì app chạy bình thường nhưng sau khi nhấn stop rồi sau đó start lần 2 thì có 2 function letRun chạy song song, giống như addeventlistener bị duplicate


Duc's question: cái data-interval làm sao mà nó ngăn đc vụ duplicate vậy? Khi t comment nó đi thì app vẫn chạy nhưng lại bị duplicate.

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
data là data set để save data vào element
lý do bị dupe là để stop https://developer.mozilla.org/en-US/docs/Web/API/setInterval thì phải xài clearInterval()
khi stop isWorking == false thì interval vẫn đang chạy, nhưng vì turnOff() nên số nó ko pop up hiện lên nữa
isWorking == true thì spawn thêm 1 interval nữa và cả 2 đều pop up
để clearInterval() thì phải biết id của cái interval dc spawn ra. Nhưng vì spawn interval khi click on start button nên khi click on stop button ko biết id của cái interval đã dc spawn là bao nhiêu
nên dùng dataset để lưu id và truyền cho stop button


DUc's question: t có 1 selection trong home page mới tạo để thay chọn tốc độ của setInterval trước khi khởi chạy app. Làm cách nào để truyền giá trị từ selection đó vào app.

có nhiều cách, cách dễ là ntn, cách khó nữa là xài cookie hay lib gì khác. Mày xài form thì phải có input submit để gửi data đi. Cuối form xài \<a> tag redirect thì form ko gửi data dc. Bên js bát data của form rồi xài thôi.