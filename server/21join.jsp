<%@page contentType="text/html; charset=utf-8" pageEncoding="UTF-8" %>

<%
        //21form.html에서 보낸 폼 데이터 출력하기
    //크라이언트가 전송한 폼데이터를 jsp에서 가져올려면
    // request.getParameter(폼요소이름)을
    //이용하면됨
    //request.getparameter(폼요소이름)
    //단 전송되는 값이 한글인 겨우
    //request.setCharacterEncoding("UTF-8)로 설정해야
    request.setCharacterEncoding("UTF-8");

   String uid = request.getParameter("uid");
   String pwd = request.getParameter("pwd");
   String name  = request.getParameter("name");
   String gender= request.getParameter("gender");
   if (gender.equals("m")) gender ="남자";
   else gender = "여자";

%>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>JSP 처리결과</title>
    </head>
    <body>
        <h1>JSP 처리결과</h1>
        <p>아이디:<%out.print(uid); %></p>
        <p>비밀번호:<%=pwd %></p>
        <p>이름:<%=name %></p>
        <p>성별:<%=gender %></p>
    </body>
</html>