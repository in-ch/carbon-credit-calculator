import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import emailjs from 'emailjs-com';
import { apikey } from "src/assets/apikey";

const Wrapper = styled.div`
    width:90%;
    margin-left:5%;
    margin-right:5%;
    min-height:500px;
    padding-top:10px;
`
const BarEnum = 100/5;
const Bar = styled.div<BarProps>`
    width:80%;
    height:6px;
    border-radius: 3px;
    background-color:rgba(92, 242, 162,0.6);
    margin:0 auto;
    margin-top:30px;
    div{
        width:${(props)=>props.num * BarEnum }%;
        height:6px;
        background-color:#3cb47499;
        border-radius: 3px;
        transition: 0.5s All;
    }
`;
const ContentWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    @media (max-width: 520px) {
        flex-direction:column;
    }
`;
const IntroducePdfDiv = styled.div`
    flex:5;
    display:flex;
    flex-direction:column;
    min-height:150px;
    justify-content:center;
    align-items:center;
    img {
        width:25px;
    }
    h2{
        margin-top:20px;
        font-size:28px;
        font-weight:normal;
    }
    p{
        font-size:12px;
        color:RGB(150,150,150);
        margin-top:15px;
        text-align:center;
    }
    input{
        padding-left:20px;
        padding-right:20px;
        height:50px;
        margin-top:50px;
        text-align:center;
        background-color:#5b4c3d;
        font-weight:bold;
        color:white;
        border-radius:15px;
        box-shadow:2px 5px 10px 0px rgba(100,100,100,0.5);
        @media (max-width: 520px) {
            top:0px;
        }
        &:hover{
            background-color:#3cb47499;
            color:white;
            transition: 0.5s all;
        }
    }
`;
const SlideDiv = styled.div<DivProps>`
    flex:5;
    height:500px;
    padding-top:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 520px) {
        height:350px;
    }
    h2{
        width:445px;
        font-size:24px;
        @media (max-width: 520px) {
            width:100%;
            margin-left:2.5%;
            font-size:16px;
        }
        @media (max-width: 281px) {
            font-size:12px;
        }
    }

    input[type=text]{
        width:100%;
        margin-top:10px;
        border-bottom:1px solid #3cb47499;
        height:50px;
        @media (max-width: 520px) {
            width:100%;
        }
    }
    select{
        border:0.5px solid rgb(100,100,100);
        padding:5px;
        border-radius:5px;
    }
    textarea{
        width:100%;
        margin-top:10px;
        height:80px;
        border:0;
        border-bottom:1px solid #3cb47499;
        outline:0;
    }
    .check{
        display:flex;
        width:445px;
        height:40px;
        padding-top:10px;
        margin-top: 30px;
        @media (max-width: 520px) {
            width:100%;
        }
        align-items: center;
        p{
            margin-left:10px;
            font-size:12px;
        }
    }
`;
const Subtitle = styled.p`
    display:inline-block;
    width:12px;
    font-size:12px;
    color:#250b5549;
    padding-bottom:10px;
`;
const Input = styled.input`
    background-color:#ffffff;
    width:80px;
    height:40px;
    text-align:center;
    border:2px solid #3cb47499;
    color:#999ea1;
    font-weight:bold;
`;
const SlideWrapper = styled.div`
    overflow-y:hidden;
    width:445px;
    height:360px;
    position:relative;
    top:-28px;
    @media (max-width: 520px) {
        width:100%;
    }
`;
const Slide = styled.div<DivProps>`
    padding-bottom:20px;
    overflow:hidden;
    opacity:${(props)=>props.pagination === props.num ? 1 : 0.2};
    transition: all 0.2s;
    height:360px;
    padding-top:50px;  
    h2{
        font-size:28px;
        @media (max-width: 520px) {
            font-size:20px;
        }
    }
`;
const HighLite = styled.span`
    color:red;
    opacity:0.5;
    font-size:18px;
    margin-top:2px;
    margin-right:10px;
`;
const HighLite2 = styled.span`
    color:#05d16199;
    opacity:0.5;
    font-size:18px;
    margin-top:2px;
    margin-right:10px;
    font-weight:bold;
`;
const SpinnerWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        color:RGB(150,150,150);
    }
`;
const BButton = styled.input<ButtonProps>`
    width:120px;
    height:50px;
    border-radius:20px;
    border:2px solid ${(props)=>props.text===props.ttype ? '#3cb47499' : '#5b4c3d'};
    margin-top:40px;
    text-align:center;
    box-shadow:2px 5px 10px 0px rgba(100,100,100,0.5);
    margin-right:20px;
    color:${(props)=>props.text===props.ttype ? '#fff' : '#000'};
    background-color:${(props)=>props.text===props.ttype ? '#3cb47499' : '#fff'};
    cursor: pointer;
`;
const SubTitleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:25px;
`;
const BackP = styled.p`
    color:RGB(100,100,100);
`;
const CContainer = styled.div`
    width:100%;
    height:70px;
    padding-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        width:60px;
        text-align:center;
        height:25px;
        font-size:20px;
        margin-right:10px;
        margin-left:10px;
    }
`;


const ConsultContainer = styled.div<ConsultShow>`
    width:100%;
    height:100vh;
    position:fixed;
    top:0px;
    left:0px;
    background-color:RGBA(0,0,0,0.3);
    z-index:2;
    display:${(props)=>props.consultShow ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    
`;
const ConsultWrapper = styled.div`
    width:60%;
    height:80vh;
    background-color:white;
    border-radius:30px;
    padding:30px;
    display:flex;
    flex-direction:column;
    @media (max-width: 520px) {
            width:90%;
            height:90vh;
    }

    h1{
        font-size:25px;
        font-weight:bold;
    }
    h5{
        font-size:16px;
        margin-top:15px;
    }
`;
const ConsultInputContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:30px;
`;
const ConsultInputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex:5;
    height:90px;
    h1{
        font-weight:normal;
        font-size:18px;
        @media (max-width: 520px) {
            font-size:12px;
        }
    }
    input{
        width:80%;
        border:2px solid rgb(120,120,120);
        height:50px;
        margin-top:10px;
        border-radius:20px;
        padding-left:10px;
        box-shadow:5px 5px 5px 2px rgba(0,0,0,0.2);
    }
`;
const SSubmitCCancelWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;
const SSubmit = styled.input`
    width:140px;
    height:40px;
    text-align:center;
    background-color:#3cb47499;
    color:white;
    margin-top:50px;
    margin-right:5px;
    @media (max-width: 520px) {
        width:40%;
        font-size:10px;
        margin-top:20px;
    }
`;

const CCancel = styled.input`
    width:140px;
    height:40px;
    text-align:center;
    background-color:#5b4c3d;
    color:white;
    margin-top:50px;
    margin-left:5px;
    @media (max-width: 520px) {
        width:40%;
        font-size:10px;
        margin-top:25px;
    }
`;

const HP = styled.p`
    color:#1c6b4199;
    border-bottom:2px solid #1c6b4199;
`;
interface DivProps {
    pagination?:number,
    num?:number,
};
interface BarProps {
    num:number
};
interface ButtonProps {
    text:string;
    ttype:string;
}
interface ConsultShow{
    consultShow:boolean;
}
const Home = () => {
    
    const [num, setNum] = useState<number>(0);
    const progressRef = useRef<HTMLDivElement | null>(null);
    const inputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const inputRef3 = useRef<HTMLInputElement | null>(null);
    const inputRef4 = useRef<HTMLInputElement | null>(null);
    const inputRef5 = useRef<HTMLTextAreaElement | null>(null);

    const [type, setType] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [result1, setResult1] = useState<number>(0);
    const [result2, setResult2] = useState<number>(0);
    const [result3, setResult3] = useState<number>(0);


    const [consultShow, setConsultShow] = useState<boolean>(false);

    const [consultCompany, setConsultCompany] = useState<string>("");
    const [consultName, setConsultName] = useState<string>("");
    const [consultPhone, setConsultPhone] = useState<string>("");
    const [consultEmail, setConsultEmail] = useState<string>("");
    const [consultElectric, setConsultElectric] = useState<string>("");
    const [consultType, setConsultType] = useState<string>("");
     


    const onChange = (e:any, setState:any) => {
        setState(e.target.value);
    }
    const onClick = (e:any, setState:any) => {
        setState(e.target.value);
    }

    const goToMove = (value:number) => {
        progressRef.current?.scrollTo({
            top:value*(360),
            behavior:'smooth',
        });
        if(value===2){
            setTimeout(()=>{
                inputRef2?.current?.focus();
            },401);
        }
        if(value===3){
            setTimeout(()=>{
                inputRef3?.current?.focus();
            },401);
        }
        if(value===4){
            setTimeout(()=>{
                inputRef4?.current?.focus();
            },401);
        }
        if(value===5){
            setTimeout(()=>{
                inputRef5?.current?.focus();
            },401);
        }
    };

    const goToUp = (value:number) =>{
        setNumHook(value);
    };

    const goToKeyDown = (value:number,e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            (document.activeElement as HTMLElement).blur();  // input focus out 명령어
            setNumHook(value);
        }
    };

    const setNumHook = (value:number) => {
        if(value === 2){
            if(type === ''){
                alert("연류 종류를 알려주세요.");
                inputRef1?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
            }
        } else if(value === 3) {
            if(email === '') {
                alert("일평균 운행거리를 알려주세요.");
                inputRef2?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
            }
        } else if(value === 4) {
            if(phone === '') {
                alert("전기차 교체 댓수를 알려주세요.");
                inputRef3?.current?.focus();
            } else { 
                setNum(value);
                goToMove(value);
                setTimeout(()=>{
                    setNumHook(5);
                    goToMove(5);
                    // done

                    console.log(type, email, phone);
                    Calculate();
                },2000);  

                // email = 운행거리 
                // phone = 전환 댓수 
            }
        } else {
            setNum(value);
            goToMove(value);
        }
    };

    const Calculate = () => {
        if(type==="CNG"){
            let base = 0.001091145 * parseInt((email)) * 365;   // 베이스라인 배출량  
            let charge = parseInt(email)*365*1.2;  // 충전 전력량
            let business = ((charge*0.4567)/1000) + ((charge*0.0036)/1000000) + ((charge*0.0085)/1000000);  // 사업 배출량 
            let one = (base - business)*parseInt((phone));  // 온실가스 감축량
            console.log("결과 : "+base,charge,business, one.toFixed(2)); 

            let result11 = Math.floor((10 * Math.round(Number(one.toFixed(2))))); // 총 절감량 
            let result22 = Math.round((result11 * 30000)/100000000);
            let result33 = Math.floor((result11)/10.8);

            setResult1(result11);
            setResult2(result22);
            setResult3(result33);
        } else if(type==="경유"){
            let base = 0.0011856 * parseInt((email)) * 365;   // 베이스라인 배출량  
            let charge = parseInt(email)*365*1.2;  // 충전 전력량
            let business = ((charge*0.4567)/1000) + ((charge*0.0036)/1000000) + ((charge*0.0085)/1000000);  // 사업 배출량 
            let one = (base - business)*parseInt((phone));  // 온실가스 감축량
            console.log("결과 : "+base,charge,business, one.toFixed(2)); 

            let result11 = Math.floor((10 * Math.round(Number(one.toFixed(2))))); // 총 절감량 
            let result22 = Math.round((result11 * 30000)/100000000);
            let result33 = Math.floor((result11)/10.8);

            setResult1(result11);
            setResult2(result22);
            setResult3(result33);
        } else {
            alert("오류가 발생했습니다. 관리자에게 문의해주세요.");
        }
    };


    const sendEmail = (e:any) => {
        e.preventDefault();
        if(consultCompany !== "" && consultEmail !== "" && consultName !== "" && consultPhone !== "" && consultType !== "" && consultElectric !== ""){
            emailjs.sendForm(apikey.SERVICE_ID, apikey.TEMPLATE_ID , e.target, apikey.USER_ID)
            .then(result => {
                    alert("상담 신청이 완료되었습니다. 이용해주셔서 감사합니다.");
                    console.log(result);
                    window.location.reload();
                },
                error => {
                    console.log(error);
                    alert("에러가 발생했습니다.");
            });            
        } else {
            alert("*는 필수값입니다.");
        }
    };


    useEffect(()=>{
        (document.activeElement as HTMLElement).blur();
        setTimeout(()=>{
            setNum(1);
            goToMove(1);
            inputRef1?.current?.click();
            inputRef1?.current?.focus();

        },1500);
    },[]);



    const OnClickShow = () => {
        setConsultShow(true);
    };

    const OnClickHide = () => {
        setConsultShow(false);
    };


    return (
        <>
            <div style={{
                backgroundColor:'RGB(253,253,253)'
            }}>  
                <Bar
                    num={num}
                >
                    <div />
                </Bar>
                
                <CContainer>
                    <Link to="/" >
                        <HP>버스</HP>
                    </Link>
                    <Link to="/taxi">
                        <p>택시</p>
                    </Link>
                </CContainer>
                
                
                <Wrapper>
                    <ContentWrapper>
                        <IntroducePdfDiv>
                            <img 
                                src={require("../assets/imgs/582cfbd96dbce.png")} 
                                alt="이미지"
                            />
                            <h2>A 운수회사 사례</h2>
                            <p>A회사가 보유한 CNG 버스 100대를 전기버스로 교체한 경우 온실가스 감축량은? (평균 운행거리 200km/일)</p>
                            <input type="button" value="39,650톤의 온실가스 감축과 약 12억원의 수익 발생" />
                            <br/>
                            <p>- 년간 3,965톤, 1억 2천만원의 수익 발생 (총 10년 기준)</p>
                            <p>- 30년생 소나무 3,671그루를 심은 것과 동일한 효과  * 30년생 소나무 CO2 흡수량(저장량) 10.8ton</p>
                        </IntroducePdfDiv>    
                        
                        <SlideDiv>
                            <SlideWrapper ref={progressRef}>
                                <Slide>
                                    <SpinnerWrapper>
                                        <ScaleLoader height="50" width="10" color="#5b4c3d" radius="8" />
                                        <br/><br/>
                                    </SpinnerWrapper>
                                </Slide>

                                <Slide
                                    pagination={1}
                                    num={num}
                                    style={{
                                        position:"relative",
                                        top:10
                                    }}
                                >
                                    <SubTitleWrapper>
                                        <Subtitle>1)</Subtitle>
                                        <BackP
                                            style={{color:'white'}}
                                        >뒤로가기</BackP>
                                    </SubTitleWrapper>
                                     <h2>안녕하세요. 연료 종류를 알려주세요. <HighLite>*</HighLite></h2>
                                    <BButton 
                                        value="CNG" 
                                        type="button" 
                                        onKeyDown={(e)=>goToKeyDown(2,e)}
                                        onClick={(e)=>onClick(e, setType)}
                                        ref={inputRef1}
                                        text="CNG"
                                        ttype={type}
                                    />
                                    <BButton 
                                        value="경유" 
                                        type="button" 
                                        onKeyDown={(e)=>goToKeyDown(2,e)}
                                        onClick={(e)=>onClick(e, setType)}
                                        text="경유"
                                        ttype={type}
                                    />

                                    <div className="check">
                                        <Input 
                                            onClick={(e)=>goToUp(2)} 
                                            type="button" 
                                            value="다음 ✔️" 
                                        />
                                        <p>Enter ↵를 누르십시오</p>
                                    </div>
                                </Slide>

                                <Slide
                                    pagination={2}
                                    num={num}
                                >
                                    <SubTitleWrapper>
                                        <Subtitle>2)</Subtitle>
                                        <BackP
                                            onClick={()=>goToUp(1)}
                                        >뒤로가기</BackP>
                                    </SubTitleWrapper>
                                    <h2
                                        style={{marginTop:14}}
                                    >일평균 운행거리를 알려주세요. <HighLite>*</HighLite></h2>
                                    <input 
                                        placeholder="ex) 100km" 
                                        type="text" 
                                        onKeyDown={(e)=>goToKeyDown(3,e)}
                                        ref={inputRef2}
                                        onChange={(e)=>onChange(e, setEmail)}
                                        value={email}
                                    />
                                    <div className="check">
                                        <Input onClick={()=>goToUp(3)} type="button" value="다음 ✔️" /><p>Enter ↵를 누르십시오</p>
                                    </div>
                                </Slide>

                                <Slide
                                    pagination={3}
                                    num={num}
                                >
                                    <SubTitleWrapper>
                                        <Subtitle>3)</Subtitle>
                                        <BackP
                                            onClick={()=>goToUp(2)}
                                        >뒤로가기</BackP>
                                    </SubTitleWrapper>
                                    <h2
                                        style={{marginTop:14}}
                                    >전기차 전환 댓수를 알려주세요.<HighLite>*</HighLite></h2>
                                    <input 
                                        placeholder="10대" 
                                        type="text" 
                                        onKeyDown={(e)=>goToKeyDown(4,e)}
                                        ref={inputRef3}
                                        onChange={(e)=>onChange(e, setPhone)}
                                        value={phone}
                                    />
                                    <div className="check">
                                        <Input onClick={()=>goToUp(4)} type="button" value="다음 ✔️" /><p>Enter ↵를 누르십시오</p>
                                    </div>
                                </Slide>

                                <Slide
                                    pagination={4}
                                    num={num}
                                >
                                    <SpinnerWrapper>
                                        <ScaleLoader height="50" width="10" color="#5b4c3d" radius="8" />
                                        <br/><br/>
                                        <p>계산 중입니다...</p>
                                    </SpinnerWrapper>
                                </Slide>
                                <Slide
                                    pagination={5}
                                    num={num}
                                >
                                    <h2>계산 결과 </h2>
                                    <h3 style={{
                                        marginTop:30,
                                    }}>총 절감량 : <HighLite2>{result1}</HighLite2>톤/10년</h3>
                                    <h3>총 기대수익 : <HighLite2>{result2}</HighLite2>억원</h3>
                                    <h3>30년생 소나무 : <HighLite2>{result3}</HighLite2>그루 심은 것과 같습니다.</h3>
                                    <div className="check">
                                        <Input onClick={()=>goToUp(1)} type="button" value="확인 완료 ✔️" style={{width:100,marginTop:20}} />
                                        <Input onClick={()=>OnClickShow()} type="button" value="무료 컨설팅 신청하기 ✔️" style={{width:150,marginTop:20,marginLeft:20}} />
                                    </div>
                                </Slide>
                            </SlideWrapper>
                        </SlideDiv>
                    </ContentWrapper>
                </Wrapper>
            </div>

            <ConsultContainer
                consultShow={consultShow}
            >
                <ConsultWrapper>
                    <h1>* 무료 컨설팅 신청</h1>
                    <h5>간단한 정보를 입력해주시면 전화 또는 이메일로 답변드립니다.</h5>
                    <h5>(*는 필수입력 항목)</h5>
                    <form 
                        onSubmit={sendEmail}
                    >
                        <ConsultInputContainer>
                            <ConsultInputWrapper>
                                <h1>* 운수사명</h1>
                                <input 
                                    type="text" 
                                    placeholder="운수사명"
                                    onChange={(e)=>onChange(e, setConsultCompany)}
                                    value={consultCompany}
                                    name="consultCompany"
                                />
                            </ConsultInputWrapper>
                            <ConsultInputWrapper>
                                <h1>* 이름</h1>
                                <input 
                                    type="text" 
                                    placeholder="이름"
                                    onChange={(e)=>onChange(e, setConsultName)}
                                    value={consultName}
                                    name="consultName"
                                />
                            </ConsultInputWrapper>
                        </ConsultInputContainer>
                        <ConsultInputContainer>
                            <ConsultInputWrapper>
                                <h1>* 연락처</h1>
                                <input 
                                    type="text" 
                                    placeholder="연락처"
                                    onChange={(e)=>onChange(e, setConsultPhone)}
                                    value={consultPhone}
                                    name="consultPhone"
                                />
                            </ConsultInputWrapper>
                            <ConsultInputWrapper>
                                <h1>* 이메일 주소</h1>
                                <input 
                                    type="text" 
                                    placeholder="이메일 주소"
                                    onChange={(e)=>onChange(e, setConsultEmail)}
                                    value={consultEmail}
                                    name="consultEmail"
                                />
                            </ConsultInputWrapper>
                        </ConsultInputContainer>
                        <ConsultInputContainer>
                            <ConsultInputWrapper>
                                <h1>* 전기차량 전환대수</h1>
                                <input 
                                    type="text" 
                                    placeholder="전기차량 전환대수"
                                    onChange={(e)=>onChange(e, setConsultElectric)}
                                    value={consultElectric}
                                    name="consultElectric"
                                />
                            </ConsultInputWrapper>
                            <ConsultInputWrapper>
                                <h1>* 기존 연류 종류</h1>
                                <input 
                                    type="text" 
                                    placeholder="기존 연류 종류"
                                    onChange={(e)=>onChange(e, setConsultType)}
                                    value={consultType}
                                    name="consultType"
                                />
                            </ConsultInputWrapper>
                        </ConsultInputContainer>
                        <SSubmitCCancelWrapper>
                            <SSubmit 
                                type="submit" value="신청 완료" 
                            />
                            <CCancel 
                                type="button" value="취 소" 
                                onClick={()=>OnClickHide()}
                            />
                        </SSubmitCCancelWrapper>
                    </form>
                </ConsultWrapper>
            </ConsultContainer>
        </>
    );
};

export default Home;