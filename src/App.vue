<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  background-color: #FCFBFC;
}
#app {
  font-family: 'Circular Std', Helvetica; 
}

.dashboard_content {
  display: flex;
  justify-content: space-between;
  // padding: 0px 103px 0px 158px;
  padding: 0px 51px 37px 50px;

  .welcome {
    min-width: 330px;
    .message {
      display: flex;
      // justify-content: space-between;
      margin-top: -23px;

      .logo {
        input {
          opacity: 0;
          height: 95px;
          width: 8%;
          margin-left: -100px;
          position: absolute;
          z-index: 6;
          cursor: pointer;
        }
      }

      .user {
        margin: 42px 0px 0px 20px;
        b {
          font-size: 25px;
          color: #30443C;
        }
        p {
          font-weight: 300;
          margin: 0px;
          font-size: 18px;
          line-height: 29px;
          color: #30443C;
        }
      }
      
    }
    img {
      height: 96px;
      border-radius: 28px;
      // position: relative;
      // top: 30%;
      // display: block;
      // margin-left: auto;
      // margin-right: auto
    }

    .sub_message {
      letter-spacing: 0.65px;
      margin: 35px 0px 30px;
      font-size: 21px;
      line-height: 27px;

      .info {
        font-size: 15px;
        color: #30443C;
      }

      .amount {
        font-size: 28px;
        line-height: 35px;
        color: #30443C;
      }
      .progress {
        margin-top: 17px;
        // background: #4DE897;
        // border-radius: 10px;
        // height: 7px;
      }
    }

    .history {
      font-size: 13px;
      letter-spacing: 0.99px;
      background: #FFFFFF;
      box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
      border-radius: 10px;
      height: 320px;
      .heading {
        padding: 10px;
        color: #30443C;
        font-weight: 300;
      }
      .table-container {
        margin: 25px;
      }
      table {
        font-weight: lighter;
        color: #30443C;
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        tr {
          border-bottom: 1px solid #e1e6eb;
          td{
            padding: 20px 0;
          }
          th {
            font-weight: lighter;
            color: #30443C;
            text-align: left;
            padding: 0px 0px 20px 0px;
          }
          i {
            color: #4DE897 
          }
        }
      }
      .pagination {
          text-align: center;
          margin: 20px 0px;
          i {
            color: #4DE897 
          }
          input {
            width: 25px;
            mix-blend-mode: normal;
            opacity: 0.6;
            border: 1px solid #A4B0A3;
            box-sizing: border-box;
            border-radius: 3px;

            &:focus , &:active {
              outline: none;
              border: 2px solid #4CE895;
              color: #30443C;
            }
          }
        }
    }
  }

  .form-container {
    // margin-left: 150px; 
    .item-1 {
      // width: 590px;
      padding: 20px 30px;
      margin-top: -20px;
      background: #F2F3F7;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
      border-radius: 6px;
      
      .welcomeboard {
        height: 40px;
        width: 600px;
        justify-content: space-between;
        display: flex;
        padding: 20px;
        margin-bottom: 31px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
        border-radius: 6px;

        .message {
          b {
            font-size: 22px;
          }
          p {
            margin: 0;
            font-size: 14px;
          }
        }

        .rollerboard {
          margin-top: -71px;
        }
      }

      .forms {
        margin-left: 20px;
        margin-right: 40px;
      }
    }
    .item-2 {
      display: flex;
      justify-content: center;
      p {
        width: 406px;
        height: 44px;
        text-align: center;
        color: #97A19D;

        span {
          color: #4DE897;
          cursor: pointer;
        }
      }
    }
    p {
      font-weight: 300;
      text-align: center;
      margin-top: 25px;
      line-height: 22px;
      color: #1B2420;

      span {
        color: #4DE897;
        cursor: pointer;
      }
    }
    .double {
      display: flex;
      margin-bottom: 10px;
      
      .first {
        width: 60%;
        input{ width: 100%}
      }
      
      .last {
        width: 40%;
        margin-left: 15px;
        input{ width: 100%}
      }
    }

    .break {
      margin: 30px 0px 5px;
      font-size: 14px;
      line-height: 20px;
      color: #30443C;
    }

    .btn {
      text-align: center;
      margin: 35px 0px 0px;
      display: flex;
      justify-content: center;
      button {
        background: #4DE897;
        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 15px;
        width: 222px;
        height: 46px;
        cursor: pointer;
        font-size: 15px;
        font-weight: bold;
        &:focus , &:active {
          outline: none;
        }
        &:hover {
          background: darken($color: #4DE897, $amount: 10%)
        }
      }
    }
    .next-break {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      p {
        margin: 0px 10px 0px 0px ;
      }
      input {
        height: 36px;
        background: white;
        font-style: italic;
        font-size: 14px;
        color: #30443C;
        border: 1px solid #CAD0C9;
        box-sizing: border-box;
        border-radius: 4px;
        display: block;
        margin-top: 6px;
        width: 180px;
        padding: 11px 14px;
        transition: all .2s ease-out;
        &:focus , &:active {
          outline: none;
          border: 2px solid #4CE895;
          color: #30443C;
        }
      }
    }
    .single {
      margin-top: 25px;
      
      .form-control {
        input {
          width: 70%;
        }

        button {
          cursor: pointer;
          background: #4DE897;
          box-shadow: 0px 4px 10px rgba(118, 212, 45, 0.3);
          border-radius: 3px;
          text-align: center;
          width: 100%;
          height: 50px;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.666667px;
          
          &:focus , &:active {
            outline: none;
          }
          &:hover {
            background: darken($color: #4DE897, $amount: 10%)
          }
          
        }
      }
    }

    .form-control {
      label {
        font-size: 14px;
        line-height: 20px;
        color: #30443C;
      }
      input {
        height: 36px;
        background: white;
        font-style: italic;
        font-size: 14px;
        color: #30443C;
        border: 1px solid #CAD0C9;
        box-sizing: border-box;
        border-radius: 4px;
        display: block;
        margin-top: 6px;
        width: 180px;
        padding: 11px 14px;
        transition: all .2s ease-out;

        &:focus , &:active {
          outline: none;
          border: 2px solid #4CE895;
          color: #30443C;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .main .dashboard_content {
    padding: 0px;
    display: grid;

    .welcome {
      width: 98%;
    }
    .form-container {
      margin-top: 100px;

      .item-1 {
        padding: 10px 10px;
        width: 93%;
        .welcomeboard {
          display: none;
        }
        .double .last {
          margin-left: 5px;
        }
      }
    }
  }
}




.content {
  display: flex;
  justify-content: space-between;
  padding: 0px 103px 0px 158px;

  .welcome {
    .message {
      margin-top: 40px;
      height: 102px;
      width: 370px;
      font-size: 40px;
      line-height: 51px;
      font-weight: bolder;
      span {
        color: #4CE895;
      }
    }
    img {
      // display: block;
      margin-left: auto;
      margin-right: auto
    }

    .sub_message {
      letter-spacing: 0.65px;
      margin-top: 29px;
      height: 54px;
      width: 370px;
      font-size: 20px;
      line-height: 27px;
    }
  }

  .form-container {
    // margin-left: 150px; 
    .item-1 {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
      border-radius: 6px;
      background: white;
      width: 400px;
      padding: 40px 60px;
      margin-top: -70px;

      .greeting {
        .holla {
          font-size: 34px;
          line-height: 43px;
          margin-bottom: 9px;
          color: #1B2420; 
        }
        .sub_holla {
          font-size: 20px;
          line-height: 25px;
          color: #30443C;
          margin-bottom: 40px;
        }
      }
    }
    .item-2 {
      display: flex;
      justify-content: center;
      p {
        font-size: 13px;
        width: 406px;
        height: 44px;
        text-align: center;
        color: #97A19D;

        span {
          color: #4DE897;
          cursor: pointer;
        }
      }
    }
    p {
      font-weight: 300;
      text-align: center;
      margin-top: 25px;
      line-height: 22px;
      color: #1B2420;
      font-size: 13px;

      span {
        color: #4DE897;
        cursor: pointer;
      }
    }
    .double {
      display: flex;
      
      .last {
        margin-left: 40px;
      }
    }

    .single {
      margin-top: 25px;
      
      .error{
        text-align: center;
      }
      .form-control {
        input {
          width: 100%;
        }

        button {
          cursor: pointer;
          background: #4DE897;
          box-shadow: 0px 4px 10px rgba(118, 212, 45, 0.3);
          border-radius: 3px;
          text-align: center;
          width: 100%;
          height: 50px;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.666667px;
          
          &:focus , &:active {
            outline: none;
          }
          &:hover {
            background: darken($color: #4DE897, $amount: 10%)
          }
          
        }
      }
    }

    .form-control {
      label {
        font-size: 13px;
        line-height: 20px;
        color: #30443C;
      }
      input {
        height: 36px;
        font-style: italic;
        font-size: 14px;
        color: #30443C;
        mix-blend-mode: normal;
        opacity: 0.5;
        border: 1px solid #CAD0C9;
        box-sizing: border-box;
        border-radius: 4px;
        display: block;
        margin-top: 6px;
        width: 180px;
        padding: 11px 14px;
        transition: all .2s ease-out;

        &:focus , &:active {
          outline: none;
          border: 2px solid #4CE895;
          color: #30443C;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .main .content {
    padding: 0px;
    display: grid;

    .welcome {
      img {
        display: none;
      }
      .message {
        font-size: 33px;
      }
      .sub_message {
        font-size: 18px;
      }
    }
    .form-container {
      margin-top: 100px;

      .item-1 {
        padding: 10px 10px;
        width: 88%;
        .double .last {
          margin-left: 5px;
        }
      }
    }
  }
}


.header-container{
  // padding: 35px 89px;
  padding: 20px 60px 50px 60px;
  display: flex;
  justify-content: space-between;

  .logo {
    img {
      height: 14px;
    }
    .company_name {
      display: block;
      font-size: 23px;
      font-weight: 900;
    }
  }
  .settings {
    button {
      text-transform: uppercase;
      cursor: pointer;
      font-size: 18px;
      line-height: 23px;
      padding: 10px;
      font-weight: 600;
      color: #000000;
      border-radius: 10px;
      background: #4CE895;
      border-color: #4CE895;
      margin-left: 23px;
      &:hover {
        color: white;
      }
      &:focus , &:active {
        outline: none;
      }
    }
    a {
      button {
        text-transform: uppercase;
        cursor: pointer;
        font-size: 18px;
        line-height: 23px;
        padding: 10px;
        font-weight: 600;
        color: #000000;
        border-radius: 10px;
      }

      .outline {
        border: none;
        background: #FCFBFC;

        &:hover {
          color: #4CE895;
        }
        &:focus , &:active {
          outline: none;
        }
      }
      
      .btn {
        background: #4CE895;
        border-color: #4CE895;
        margin-left: 23px;
        &:hover {
          color: white;
        }
        &:focus , &:active {
          outline: none;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .header-container {
    padding: 14px 14px 60px 14px;
    .settings {
      margin-top: 10px;
    }
  }
}

.center_image {
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.info_board {
  text-align: center;
  margin-top: 55px;
  .heading {
    span {
      font-size: 40px;
      line-height: 51px;
      font-weight: 900;
    }
  }
  .sub_heading {
    margin-top: 10px;
    span {
      font-size: 35px;
      line-height: 51px;
    }
  }
  .author {
    margin-top: 50px;
    span {
      font-size: 24px;
      line-height: 30px;
      font-weight: 600;
      
    }
  }
}
</style>
