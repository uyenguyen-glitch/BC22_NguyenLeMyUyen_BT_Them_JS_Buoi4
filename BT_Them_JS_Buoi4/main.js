/**
 * Bài 1
 ** Đầu vào: ngày, tháng, năm
 ** Xử lí:
 * - Xét tháng
 *      + Tháng 1,3,5,7,8,10,12: có 31 ngày
 *      + Tháng 4,6,9,11: có 30 ngày
 * - Xét ngày
 *     + Nếu là ngày 1 của các tháng khác tháng 1 thì tháng trước đó sẽ bị giảm
 *     + Nếu là ngày 31 hoặc 30 của các tháng khác tháng 12 thì tháng tiếp theo sẽ được tăng lên
 *     + Nếu là ngày 31/12 thì năm tiếp theo sẽ được tăng lên và tháng sẽ là tháng 1
 *     + Nếu là ngày 1/1 thì năm trước đó sẽ được giảm và tháng sẽ là tháng 12
 *     + Nếu là ngày 28/2 thì sẽ xét đến năm
 *           + Năm nhuận: thì ngày tiếp theo sẽ là 29/2
 *           + Năm không nhuận: thì ngày tiếp theo sẽ là 1/3
 *     + Nếu là ngày 29/2 thì sẽ xét đến năm
 *           + Năm nhuận thì ngày tiếp theo sẽ là 1/3
 *           + Năm không nhuận thì ngày nhập không hợp lí
 *
 ** Đầu ra:
 *      + Ngày tháng năm tiếp theo của ngày tiếp theo
 *      + Ngày tháng năm của ngày trước đó
 */

document.getElementById("btn__tinhNgay").onclick = function () {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var folDay = day;
  var preDay = day;
  var folMonth = month;
  var preMonth = month;
  var folYear = year;
  var preYear = year;
  var resultL1 = "";
  var result_Check = "";

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 9 ||
    month == 10 ||
    month == 12
  ) {
    if (day < 31) {
      folDay += 1;
      if (day == 1) {
        if (month == 1) {
          preMonth = 12;
          preDay = 31;
          preYear -= 1;
        } else if (month == 5 || month == 7 || month == 10 || month == 12) {
          preDay = 30;
          preMonth -= 1;
        } else if (month == 8) {
          preDay = 31;
          preMonth -= 1;
        } else {
          if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            preDay = 29;
            preMonth -= 1;
          } else {
            preDay = 28;
            preMonth -= 1;
          }
        }
      } else {
        preDay -= 1;
      }
    } else if (day == 31) {
      folDay = 1;
      preDay -= 1;
      if (month == 12) {
        folMonth = 1;
        folYear += 1;
      } else {
        folMonth += 1;
      }
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day < 30) {
      folDay += 1;
      if (day == 1) {
        preMonth -= 1;
        preDay = 31;
      } else {
        preDay -= 1;
      }
    } else if (day == 30) {
      folDay = 1;
      folMonth += 1;
      preDay -= 1;
    }
  } else {
    if (day < 28) {
      folDay += 1;
      if (day == 1) {
        preDay = 31;
        preMonth = 1;
      } else {
        preDay -= 1;
      }
    } else if (day == 28) {
      preDay -= 1;
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        folDay += 1;
      } else {
        folDay = 1;
        folMonth = 3;
      }
    } else if (
      day == 29 &&
      (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
    ) {
      folDay = 1;
      folMonth = 3;
      preDay -= 1;
    } else if (day == 29 && year % 400 != 0) {
      result_Check =
        "<div class= 'alert alert-success'><p>Năm này không phải năm nhuận nên không có ngày 29 bạn nhé!!!</p></div>";
    }
  }

  resultL1 =
    "<div class= 'alert alert-success'><p>- Ngày tháng năm trước đó:</p>";
  resultL1 +=
    "<p> Ngày " + preDay + " tháng " + preMonth + " năm " + preYear + "</p>";
  resultL1 += "<p>- Ngày tháng năm tiếp theo: </p>";
  resultL1 +=
    "<p> Ngày " + folDay + " tháng " + folMonth + " năm " + folYear + "</p>";

  if (result_Check != "") {
    document.getElementById("footerTinhNgay").innerHTML = result_Check;
  } else {
    document.getElementById("footerTinhNgay").innerHTML = resultL1;
  }
};

/**
 * Bài 2
 ** Đầu vào: tháng, năm
 ** Xử lí:
 * - Xét tháng
 *      + Tháng 1,3,5,7,8,10,12: có 31 ngày
 *      + Tháng 4,6,9,11: có 30 ngày
 *      + Tháng 2 có:
 *        + 29 ngày khi năm là năm nhuận
 *        + 28 ngày khi năm là năm không nhuận
 ** Đầu ra: Số ngày của tháng
 */
document.getElementById("btn__tinhDayOfMonth").onclick = function () {
  var month = document.getElementById("lesson2__month").value * 1;
  var year = document.getElementById("lesson2__year").value * 1;
  var day;
  var resultL2;

  switch (month) {
    case (1, 3, 5, 7, 8, 10, 12):
      day = 30;
      break;
    case (4, 6, 9, 11):
      day = 30;
      break;
    case 2:
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        day = 29;
        break;
      } else {
        day = 28;
        break;
      }
    default:
      day = 0;
      break;
  }

  if (day == 0) {
    resultL2 =
      "<div class= 'alert alert-success'> <p> Bạn đã nhập tháng không hợp lệ </p></div>";
    document.getElementById("footerDayOfMonth").innerHTML = resultL2;
  } else {
    resultL2 =
      "<div class= 'alert alert-success'> <p> Số ngày của tháng " +
      month +
      " là: " +
      day +
      "</p></div>";
    document.getElementById("footerDayOfMonth").innerHTML = resultL2;
  }
};

/**
 * Bài 3
 ** Đầu vào: số nguyên ba chữ số
 ** Xử lí:
 * - Kiểm tra số nguyên có hợp lệ hay không
 * - Tách số:
 *  + Số hàng trăm: n / 100
 *  + Số hàng chục: (n/10) % 10
 *  + Số hàng đơn vị: n % 10
 * - Viết cách đọc hợp lí cho từng hàng chữ số
 ** Đầu ra: cách đọc của số nguyên ba chữ
 */

document.getElementById("btn__docSo").onclick = function () {
  var numb = document.getElementById("number").value * 1;
  var chuSoHangTram;
  var chuSoHangDonVi;
  var chuSoHangChuc;
  var docSoHangTram = "";
  var docSoHangChuc = "";
  var docSoHangDonVi = "";
  var resultL3 = "";

  chuSoHangTram = parseInt(numb / 100);
  chuSoHangChuc = parseInt((numb / 10) % 10);
  chuSoHangDonVi = parseInt(numb % 10);

  if (chuSoHangTram == 0) {
    resultL3 =
      "<div class='alert alert-success'> <p> Số bạn vừa nhập không phải là số nguyên có ba chữ số </p> </div>";
    document.getElementById("footerDocSo").innerHTML = resultL3;
  } else {
    switch (chuSoHangTram) {
      case 1:
        docSoHangTram = "Một trăm";
        break;
      case 2:
        docSoHangTram = "Hai trăm";
        break;
      case 3:
        docSoHangTram = "Ba trăm";
        break;
      case 4:
        docSoHangTram = "Bốn trăm";
        break;
      case 5:
        docSoHangTram = "Năm trăm";
        break;
      case 6:
        docSoHangTram = "Sáu trăm";
        break;
      case 7:
        docSoHangTram = "Bảy trăm";
        break;
      case 8:
        docSoHangTram = "Tám trăm";
        break;
      case 9:
        docSoHangTram = "Chín trăm";
        break;
      default:
        docSoHangTram = "Không biết đọc";
        break;
    }

    switch (chuSoHangChuc) {
      case 1:
        docSoHangChuc = "mươi";
        break;
      case 2:
        docSoHangChuc = "hai mươi";
        break;
      case 3:
        docSoHangChuc = "ba mươi";
        break;
      case 4:
        docSoHangChuc = "bốn mươi";
        break;
      case 5:
        docSoHangChuc = "năm mươi";
        break;
      case 6:
        docSoHangChuc = "sáu mươi";
        break;
      case 7:
        docSoHangChuc = "bảy mươi";
        break;
      case 8:
        docSoHangChuc = "tám mươi";
        break;
      case 9:
        docSoHangChuc = "chín mươi";
        break;
      default:
        docSoHangChuc = "Không biết đọc";
        break;
    }

    switch (chuSoHangDonVi) {
      case 1:
        docSoHangDonVi = "mốt";
        break;
      case 2:
        docSoHangDonVi = "hai";
        break;
      case 3:
        docSoHangDonVi = "ba";
        break;
      case 4:
        docSoHangDonVi = "bốn";
        break;
      case 5:
        docSoHangDonVi = "năm";
        break;
      case 6:
        docSoHangDonVi = "sáu";
        break;
      case 7:
        docSoHangDonVi = "bảy";
        break;
      case 8:
        docSoHangDonVi = "tám";
        break;
      case 9:
        docSoHangDonVi = "chín";
        break;
      default:
        docSoHangDonVi = "Không biết đọc";
        break;
    }
    resultL3 =
      "<div class='alert alert-success'> <p> Số " + numb + " được đọc là: ";
    resultL3 += docSoHangTram + " ";
    resultL3 += docSoHangChuc + " ";
    resultL3 += docSoHangDonVi + " ";
    resultL3 += "</p></div>";
    document.getElementById("footerDocSo").innerHTML = resultL3;
  }
};

/**
 * Bài 4
 ** Đầu vào: tên và tọa độ nhà của 3 sinh viên, tọa độ trường đại học
 ** Xử lí:
 * - Lần lượt tính độ dài từ nhà của 3 sinh viên đến trường đại học theo công thức: sqrt((xDH - xNha)*(xDH - xNha) + (yDH - yNha) * (yDH - yNha))
 * - So sánh các độ dài vừa tính
 ** Đầu ra: Sinh viên có khoảng cách từ nhà đến trường đại học xa nhất
 */

document.getElementById("btn__tinhToaDo").onclick = function () {
  var nameStudent__1 = document.getElementById("student__1").value;
  var nameStudent__2 = document.getElementById("student__2").value;
  var nameStudent__3 = document.getElementById("student__3").value;

  var coordinatesX__1 = document.getElementById("coordinatesX__1").value * 1;
  var coordinatesX__2 = document.getElementById("coordinatesX__2").value * 1;
  var coordinatesX__3 = document.getElementById("coordinatesX__3").value * 1;

  var coordinatesY__1 = document.getElementById("coordinatesY__1").value * 1;
  var coordinatesY__2 = document.getElementById("coordinatesY__2").value * 1;
  var coordinatesY__3 = document.getElementById("coordinatesY__3").value * 1;

  var coordinatesXUni = document.getElementById("coordinatesXUni").value * 1;
  var coordinatesYUni = document.getElementById("coordinatesYUni").value * 1;

  var lengthStu__1 = Math.sqrt(
    Math.pow(coordinatesXUni - coordinatesX__1, 2) +
      Math.pow(coordinatesYUni - coordinatesY__1, 2)
  );
  var lengthStu__2 = Math.sqrt(
    Math.pow(coordinatesXUni - coordinatesX__2, 2) +
      Math.pow(coordinatesYUni - coordinatesY__2, 2)
  );
  var lengthStu__3 = Math.sqrt(
    Math.pow(coordinatesXUni - coordinatesX__3, 2) +
      Math.pow(coordinatesYUni - coordinatesY__3, 2)
  );

  var length__Max = 0;
  var student__Max;

  if (lengthStu__1 >= lengthStu__2) {
    length__Max = lengthStu__1;
    student__Max = nameStudent__1;
  } else {
    length__Max = lengthStu__2;
    student__Max = nameStudent__2;
  }

  if (length__Max <= lengthStu__3) {
    length__Max = lengthStu__3;
    student__Max = nameStudent__3;
  }

  resultL4 = "<div class='alert alert-success'><p>Nhà bạn ";
  resultL4 += student__Max;
  resultL4 += " có khoảng cách từ nhà đến trường đại học xa nhất </p></div>";

  document.getElementById("footerToaDo").innerHTML = resultL4;
};
