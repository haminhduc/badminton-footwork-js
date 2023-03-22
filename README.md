# badminton-foottraning-js
Duc's question: ấn nút start lần đầu thì app chạy bình thường nhưng sau khi nhấn stop rồi sau đó start lần 2 thì có 2 function letRun chạy song song, giống như addeventlistener bị duplicate


Duc's question: cái data-interval làm sao mà nó ngăn đc vụ duplicate vậy? Khi t comment nó đi thì app vẫn chạy nhưng lại bị duplicate.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
data là data set để save data vào element
lý do bị dupe là để stop https://developer.mozilla.org/en-US/docs/Web/API/setInterval thì phải xài clearInterval()
khi stop isWorking == false thì interval vẫn đang chạy, nhưng vì turnOff() nên số nó ko pop up hiện lên nữa
isWorking == true thì spawn thêm 1 interval nữa và cả 2 đều pop up
để clearInterval() thì phải biết id của cái interval dc spawn ra. Nhưng vì spawn interval khi click on start button nên khi click on stop button ko biết id của cái interval đã dc spawn là bao nhiêu
nên dùng dataset để lưu id và truyền cho stop button