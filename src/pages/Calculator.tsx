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
    height:620px;
    border-radius:20px;
    padding-top:10px;
    background-color:#fff;
    box-shadow:5px 5px 5px 1px rgba(0,0,0,0.2);
    position:relative;
    overflow:hidden;

    @media (max-width: 520px) {
        width:95%;
        height:580px;
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
    div{
        width:100px;
        height:30px;
        border:1px solid #4F71BE;
        text-align:center;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .focus{
        background-color:#4F71BE;
    }
`;
const HEADING = styled.h5`
    margin-top:20px;
    font-size:24px;
    text-align:center;
    font-weight:bold;
    color:RGB(80,80,80);
    @media (max-width: 520px) {
        font-size:16px;
    }
`;
const HP = styled.p`
    color:#fff;
    margin-left:7px;
    margin-right:7px;
`;
const PP = styled.p`
    color:#000;
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
    @media (max-width: 520px) {
        height:40px;
    }
    p{
        font-size:18px;
        width:230px;
        font-weight:normal;
        @media (max-width: 520px) {
            font-size:16px;
        }
    }
    select{
        width:100px;
        height:40px;
        border:1px solid rgb(255,255,255);
    }
    input{
        width:25%;
        height:40px;
        border-bottom:1px solid rgba(0,0,0,0.3);
    }
`;
const Unit = styled.h5`
    font-size:14px;
    font-weight:normal;
    margin:0px;
    width:30px;
    border-bottom:1px solid rgba(0,0,0,0.3);
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    left:-2px;
`;
const IInputDiv = styled.div`
    width:100%;
    height:50px;
    margin-bottom:10bx;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    @media (max-width: 520px) {
        height:40px;
    }
    p{
        font-size:16px;
        width:35%;
        color:white;
        font-weight:bold;
        text-align:right;
        @media (max-width: 520px) {
            font-size:12px;
        }
    }
    h5{
        width:33%;
        color:white;
        padding-left:15px;
        font-size:16px;
        text-align:right;
    }
    h4{
        width:35%;
        text-align:right;
        color:#000;
        text-align:left;
        margin-left:10px;
        font-size:12px;
    }
`;
const IIInputDiv = styled.div`
    width:120px;
    height:40px;
    margin: 0 auto;
    margin-top:10px;
    margin-bottom:10px;
    border-radius:10px;
    background-color:#f9b333;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    p{
        color:#000;
        font-weight:bold;
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
    background-color:#4F71BE;
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
    background-color:#f9b333;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    div{
        flex:5;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
    h5{
        color:white;
        font-size:20px;
        font-weight:normal;
    }
    img{
        width:30px;
        height:30px;
    }
`;

const Calculator = () => {

    const [type, setType] = useState<string>('CNG');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [result1, setResult1] = useState<number>(0);
    const [result2, setResult2] = useState<number>(0);
    const [result3, setResult3] = useState<number>(0);

    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const inputRef3 = useRef<HTMLInputElement | null>(null);

    const [unit,setUnit] = useState("억 원");
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
        
        if(type==="CNG"){
            let base = 0.001091145 * parseInt((email)) * 365;   // 베이스라인 배출량  
            let charge = parseInt(email)*365*1.2;  // 충전 전력량
            let business = ((charge*0.4567)/1000) + ((charge*0.0036)/1000000) + ((charge*0.0085)/1000000);  // 사업 배출량 
            let one = (base - business)*parseInt((phone));  // 온실가스 감축량

            // 0억원 이하일 때문에 단위를 변경 
            // 계산기 버전으로 디자인 변경 
            
            let result11 = Math.floor((10 * Math.round(Number(one.toFixed(2))))); // 총 절감량 
            console.log(result11*30000/100000000);
            let result22 = 0;
            if((result11*30000/100000000)<1){
                result22 = Math.round((result11 * 30000)/10000);
                setUnit("만 원");
            } else {
                result22 = Math.round((result11 * 30000)/100000000);
                setUnit("억 원");
            }
            let result33 = Math.floor((result11)/10.8);

            setResult1(result11);
            setResult2(result22);
            setResult3(result33);
        } else if(type==="경유"){
            let base = 0.0011856 * parseInt((email)) * 365;   // 베이스라인 배출량  
            let charge = parseInt(email)*365*1.2;  // 충전 전력량
            let business = ((charge*0.4567)/1000) + ((charge*0.0036)/1000000) + ((charge*0.0085)/1000000);  // 사업 배출량 
            let one = (base - business)*parseInt((phone));  // 온실가스 감축량

            let result11 = Math.floor((10 * Math.round(Number(one.toFixed(2))))); // 총 절감량 

            let result22 = 0;
            if((result11*30000/100000000)<1){
                result22 = Math.round((result11 * 30000)/10000);
                setUnit("만 원");
            } else {
                result22 = Math.round((result11 * 30000)/100000000);
                setUnit("억 원");
            }
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
                <HEADING>탄소배출권 수익성 계산기</HEADING>
                <Header>
                    <div className="focus">
                        <Link to="/bus">
                            <HP>버스</HP>
                        </Link>
                    </div>
                    <div>
                        <Link to="/taxi">
                            <PP>택시</PP>
                        </Link>
                    </div>
                </Header>
                <InputDiv>
                    <p>-  연료 종류</p>
                    <select
                        onChange={(e)=>onChange(e,setType)}
                    >
                        <option>CNG</option>
                        <option>경유</option>
                    </select>
                </InputDiv>
                <InputDiv>
                    <p>-  일평균 운행거리(km)</p>
                    <input 
                        type="number" 
                        placeholder="ex) 100"
                        onChange={(e)=>onChange(e, setEmail)}
                        onBlur={(e)=>onChange(e, setEmail)}
                        ref={inputRef2}
                        onKeyDown={(e)=>goToKeyDown(e)}
                        maxLength={8}
                    />
                    <Unit>km</Unit>
                </InputDiv>
                <InputDiv>
                    <p>-  전기차 전환대수(대)</p>
                    <input 
                        type="number" 
                        placeholder="ex) 200"
                        onChange={(e)=>onChange(e, setPhone)}
                        onBlur={(e)=>onChange(e, setPhone)}
                        ref={inputRef3}
                        onKeyDown={(e)=>goToKeyDown(e)}
                        maxLength={8}
                    />
                    <Unit>대</Unit>
                </InputDiv>
                <IIInputDiv
                    onClick={()=>Calculate()}
                >
                    <p>계산하기</p>
                </IIInputDiv>
                <Result>
                    <h1>계산 결과</h1>
                    <Hr/>
                    <IInputDiv>
                        <p>총 절감량</p>
                        <h5>{numberWithCommas(result1)}</h5>
                        <h4>톤/10년</h4>
                    </IInputDiv>
                    <IInputDiv>
                        <p>총 기대수익</p>
                        <h5>{numberWithCommas(result2)}</h5>
                        <h4>{unit}</h4>
                    </IInputDiv>
                    <IInputDiv>
                        <p style={{
                            width:"100%",
                            textAlign:"center",
                            fontSize:15
                        }}>* 30년 생 소나무 {numberWithCommas(result3)}그루를 <br/>심는 것과 같습니다.</p>
                    </IInputDiv>
                </Result>
                <Submit>
                    <div>
                        <a href="https://hooxipartners.com/contact"  target="_blank">
                            <h5>무료 상담 신청하기</h5>
                        </a>
                    </div>
                </Submit>
            </CalculatorWrapper>
        </Container>
    );
}

export default Calculator;