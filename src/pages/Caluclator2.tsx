import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:RGB(230,230,230);
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:10px;
    padding-right:10px;
`;
const CalculatorWrapper = styled.div`
    width:400px;
    height:550px;
    border-radius:20px;
    background-color:#fff;
    box-shadow:5px 5px 5px 1px rgba(0,0,0,0.2);
    position:relative;
    overflow:hidden;

    @media (max-width: 520px) {
        width:95%;
    }
`;
const Header = styled.div`
    width:100%;
    height:40px;
    margin-top:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
const HEADING = styled.h5`
    margin-top:20px;
    font-size:24px;
    text-align:center;
    font-weight:bold;
    color:RGB(80,80,80);
`;
const HP = styled.p`
    color:#1c6b4199;
    border-bottom:2px solid #1c6b4199;
    margin-left:7px;
    margin-right:7px;
`;
const PP = styled.p`
    color:#000;
    border-bottom:2px solid #fff;
    margin-left:7px;
    margin-right:7px;
`;
const InputDiv = styled.div`
    width:98%;
    height:50px;
    margin-top:10px;
    padding-left:5%;
    padding-right:5%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    p{
        font-size:18px;
    }
    select{
        width:100px;
        height:40px;
    }
    input{
        width:100px;
        height:40px;
        border-bottom:1px solid rgba(0,0,0,0.3);
    }
`;
const IInputDiv = styled.div`
    width:100%;
    height:50px;
    margin-bottom:10bx;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    p{
        font-size:14px;
        width:33%;
        color:white;
        font-weight:bold;
        @media (max-width: 520px) {
            font-size:12px;
        }
    }
    h5{
        width:33%;
        color:white;
    }
`;
const Result = styled.div`
    width:90%;
    margin-top:5px;
    height:200px;
    margin-left:5%;
    margin-right:5%;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:20px;
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    background-color:#46a87499;
    box-shadow:2px 2px 5px 1px rgba(0,0,0,0.2);
    h1{
        text-align:left;
        font-size:20px;
        color:white;
    }
`;
const Hr = styled.div`
    width:100%;
    height:0.5px;
    margin-top:10px;
    background-color:#fff;
`;
const Submit = styled.div`
    width:100%;
    height:50px;
    position:absolute;
    bottom:0px;
    background-color:#5b4c3d;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    p{
        color:white;
        font-size:20px;
    }
    img{
        width:30px;
        height:30px;
    }
`;
const Calculator2 = () => {

    const [type, setType] = useState<string>('LPG');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [result1, setResult1] = useState<number>(0);
    const [result2, setResult2] = useState<number>(0);
    const [result3, setResult3] = useState<number>(0);

    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const inputRef3 = useRef<HTMLInputElement | null>(null);

    const [unit,setUnit] = useState("만 원");
    useEffect(()=>{
    },[]);

    const onChange = (e:any, setState:any) => {
        setState(e.target.value);
    }
    const goToKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            Calculate();
        }
    };

    const Calculate = () => {
        if(type ===""){
            alert("연류 종류를 선택해주세요.");
            return;
        }
        if(email === ""){
            alert("일평균 운행거리를 알려주세요.");
            inputRef2?.current?.focus();
            return;
        }
        if(phone === ""){
            alert("전기차 교체 댓수를 알려주세요.");
            inputRef3?.current?.focus();
            return;
        }
        
        if(type==="LPG"){
            let base = 0.000406315 * parseInt((email)) * 365;   // 베이스라인 배출량  
            let charge = parseInt(email)*365*0.172413793;  // 충전 전력량
            let business = ((charge*0.4567)/1000) + ((charge*0.0036)/1000000) + ((charge*0.0085)/1000000);  // 사업 배출량 
            let one = (base - business)*parseInt((phone));  // 온실가스 감축량
            console.log("온실가스 감축량" +one);
            console.log("사업 배출량"+business, " 베이스라인 배출량" +base);

            let result11 = Math.floor((7 * Math.round(Number(one.toFixed(2))))); // 총 절감량 
            let result22 = Math.round((result11 * 30000)/10000);
            let result33 = Math.floor((result11)/10.8);

            setResult1(result11);
            setResult2(result22);
            setResult3(result33);
        } else if(type==="경유"){
            let base = 0.0001482 * parseInt((email)) * 365;   // 베이스라인 배출량 
            let charge = parseInt(email)*365*0.172413793;  // 충전 전력량
            let business = ((charge*0.4567)/1000) + ((charge*0.0036)/1000000) + ((charge*0.0085)/1000000);  // 사업 배출량 
            let one = (base - business)*parseInt((phone));  // 온실가스 감축량


            let result11 = Math.floor((7 * Math.round(Number(one.toFixed(2))))); // 총 절감량 
            let result22 = Math.round((result11 * 30000)/10000);;

            let result33 = Math.floor((result11)/10.8);
            
            setResult1(result11);
            setResult2(result22);
            setResult3(result33);
        } else {
            alert("오류가 발생했습니다. 관리자에게 문의해주세요.");
        }
    };

    function numberWithCommas(x:any) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    

    return (
        <Container>
            <CalculatorWrapper>
                <HEADING>탄소 배출 계산기</HEADING>
                <Header>
                    <Link to="/bus">
                        <PP>버스</PP>
                    </Link>
                    <Link to="/taxi">
                        <HP>택시</HP>
                    </Link>
                </Header>
                <InputDiv>
                    <p>-  연류 종류</p>
                    <select
                        onChange={(e)=>onChange(e,setType)}
                    >
                        <option>LPG</option>
                        <option>경유</option>
                    </select>
                </InputDiv>
                <InputDiv>
                    <p>-  일평균 운행거리</p>
                    <input 
                        type="text" 
                        placeholder="ex) 100km"
                        onChange={(e)=>onChange(e, setEmail)}
                        onBlur={(e)=>onChange(e, setEmail)}
                        ref={inputRef2}
                        onKeyDown={(e)=>goToKeyDown(e)}
                    />
                </InputDiv>
                <InputDiv>
                    <p>-  전기차 전환댓수</p>
                    <input 
                        type="text" 
                        placeholder="ex) 200대"
                        onChange={(e)=>onChange(e, setPhone)}
                        onBlur={(e)=>onChange(e, setPhone)}
                        ref={inputRef3}
                        onKeyDown={(e)=>goToKeyDown(e)}
                    />
                </InputDiv>
                <Result>
                    <h1>계산 결과</h1>
                    <Hr/>
                    <IInputDiv>
                        <p>-  총 절감량</p>
                        <h5>{numberWithCommas(result1)}</h5>
                        <p>톤/7년</p>
                    </IInputDiv>
                    <IInputDiv>
                        <p>-  총 기대수익</p>
                        <h5>{numberWithCommas(result2)}</h5>
                        <p>{unit}</p>
                    </IInputDiv>
                    <IInputDiv>
                        <p>-  30년 생 소나무</p>
                        <h5>{numberWithCommas(result3)}</h5>
                        <p>그루를 심는 것과 같습니다.</p>
                    </IInputDiv>
                </Result>
                <Submit
                    onClick={()=>Calculate()}
                >
                    <p>계산하기</p>
                </Submit>
            </CalculatorWrapper>
        </Container>
    );
}

export default Calculator2;