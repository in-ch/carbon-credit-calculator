import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useRef, useState } from "react";
import Header from "src/components/Header";
import { Link } from "react-router-dom";



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
const Home2 = () => {
    
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
                },2000);
            }
        } else {
            setNum(value);
            goToMove(value);
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
                        <p>버스</p>
                    </Link>
                    <Link to="/taxi">
                        <HP>택시</HP>
                    </Link>
                </CContainer>

                <Wrapper>
                    <ContentWrapper>
                        <IntroducePdfDiv>
                            <img 
                                src={require("../assets/imgs/582cfbd96dbce.png")} 
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
                                        <ScaleLoader height="50" width="10" color="#6b5ce7" radius="8" />
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
                                        <ScaleLoader height="50" width="10" color="#6b5ce7" radius="8" />
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
                                    }}>총 절감량 : <HighLite2>39,650</HighLite2>톤/10년</h3>
                                    <h3>총 기대수익 : <HighLite2>12</HighLite2>억원</h3>
                                    <h3>30년생 소나무 : <HighLite2>3,671</HighLite2>그루 심은 것과 같습니다.</h3>
                                    <div className="check">
                                        <Input onClick={()=>goToUp(1)} type="button" value="확인 완료 ✔️" style={{width:100,marginTop:20}} />
                                        <Input onClick={()=>goToUp(1)} type="button" value="무료 컨설팅 신청하기 ✔️" style={{width:150,marginTop:20,marginLeft:20}} />
                                    </div>
                                </Slide>
                            </SlideWrapper>
                        </SlideDiv>
                    </ContentWrapper>
                </Wrapper>
            </div>
        </>
    );
};

export default Home2;