import styled from "styled-components";

export default styled.label`
ul {
    padding: 0px;
    margin: 5px;

    li {
        display: inline-block;
        padding: 4px 6px;
        font-family: Helvetica; sans-serif;
        border-radius: 5px;
        margin: 0px 4px 4px 0px;
        cursor: pointer;
        background-color: #e4e7ea;
        border: 1px solid #d2d6dc;

        span {
            margin-left: 10px;
            font-weight: 1000;
            position: relative;
            top: 2px;
        }
    }

    input {
        width: 20%;
        outline: none;
        border: none;
        font-size: 14px;
        font-family: Helvetica, sans-serif;
    }
}
`;