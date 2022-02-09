import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useRef, useState } from "react";
import Header from "src/components/Header";



const Wrapper = styled.div`
    width:90%;
    margin-left:5%;
    margin-right:5%;
    min-height:500px;
    padding-top:40px;
`
const BarEnum = 100/7;
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
    min-height:150px;
    justify-content:center;
    align-items:center;
    input{
        width:120px;
        height:40px;
        text-align:center;
        border:2px solid #3cb47499;
        background-color:white;
        font-weight:bold;
        color:#999ea1;
        position:relative;
        top:-50px;
        @media (max-width: 520px) {
            top:0px;
        }
        &:hover{
            border:2px solid white;
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
        margin-top: 10px;
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
    height:300px;
    position:relative;
    top:-100px;
    @media (max-width: 520px) {
        width:100%;
    }
`;
const Slide = styled.div<DivProps>`
    padding-bottom:20px;
    overflow:hidden;
    opacity:${(props)=>props.pagination === props.num ? 1 : 0.2};
    transition: all 0.2s;
    height:300px;
    padding-top:100px;  
`;
const HighLite = styled.span`
    color:red;
    opacity:0.5;
    font-size:18px;
    margin-top:2px;
    margin-right:10px;
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

interface DivProps {
    pagination?:number,
    num?:number,
};
interface BarProps {
    num:number
};

const Home = () => {
    
    const [num, setNum] = useState<number>(0);
    const progressRef = useRef<HTMLDivElement | null>(null);
    const inputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef2 = useRef<HTMLInputElement | null>(null);
    const inputRef3 = useRef<HTMLInputElement | null>(null);
    const inputRef4 = useRef<HTMLInputElement | null>(null);
    const inputRef5 = useRef<HTMLTextAreaElement | null>(null);
   
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [consultType, setConsultType] = useState<string>('');
    const [consultDes, setConsultDes] = useState<string>('');

    const onChange = (e:any, setState:any) => {
        setState(e.target.value);
    }
    const onChangeSelect = (e:any) => {
        setConsultType(e.target.value);
    };

    const goToMove = (value:number) => {
        progressRef.current?.scrollTo({
            top:value*(300),
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
            if(name === ''){
                alert("성함을 입력해주세요.");
                inputRef1?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
            }
        } else if(value === 3) {
            if(email === '') {
                alert("이메일을 알려주세요.");
                inputRef2?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
            }
        } else if(value === 4) {
            if(phone === '') {
                alert("연락처를 알려주세요.");
                inputRef3?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
            }
        } else if(value === 5) {
            if(consultType === '') {
                alert("상담 종류를 알려주세요.");
                inputRef4?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
            }
        } else if(value === 6) {
            if(consultDes === '') {
                alert("자세한 내용을 알려주세요.");
                inputRef5?.current?.focus();
            } else {
                setNum(value);
                goToMove(value);
                setTimeout(()=>{
                    setNumHook(7);
                    goToMove(7);
                    // mutationInsertConsult({
                    //     variables:{
                    //         input:{
                    //             name,
                    //             phone,
                    //             email,
                    //             consultDes,
                    //             consultType
                    //         }
                    //     }
                    // });
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
        },1500);
    },[]);

    return (
        <>
            <div style={{
                backgroundColor:'RGB(253,253,253)'
            }}>  
                <Header />
                <Bar
                    num={num}
                >
                    <div />
                </Bar>

                <Wrapper>
                    <ContentWrapper>
                        <IntroducePdfDiv>
                            <a target="_blank" rel="noreferrer" href="https://daewon-resourse.s3.ap-northeast-2.amazonaws.com/companyIntroduce.pdf">
                                <input 
                                    type="button" 
                                    
                                    value="회사소개서 📁"
                                />
                            </a>
                        </IntroducePdfDiv>    
                        
                        <SlideDiv>
                            <SlideWrapper ref={progressRef}>
                                <Slide>
                                    <SpinnerWrapper>
                                        <ScaleLoader height="50" width="10" color="#6b5ce7" radius="8" />
                                        <br/><br/>
                                        <p>잠시만요....</p>
                                    </SpinnerWrapper>
                                </Slide>

                                <Slide
                                    pagination={1}
                                    num={num}
                                >
                                    <Subtitle>1)</Subtitle> <h2>안녕하세요. 담당자님, 성함이 어떻게 되세요? <HighLite>*</HighLite></h2>
                                    <input 
                                        placeholder="성함" 
                                        type="text" 
                                        onKeyDown={(e)=>goToKeyDown(2,e)}
                                        onChange={(e)=>onChange(e, setName)}
                                        value={name}
                                        ref={inputRef1}
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
                                    <Subtitle>2)</Subtitle><h2>이메일 주소를 알려주시면 관련 자료를 보내드릴게요. <HighLite>*</HighLite></h2>
                                    <input 
                                        placeholder="some@example.com" 
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
                                    <Subtitle>3)</Subtitle><h2>연락처를 알려주세요. 안내를 도와드립니다.<HighLite>*</HighLite></h2>
                                    <input 
                                        placeholder="010-1234-5678" 
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
                                    <Subtitle>4)</Subtitle><h2>상담 종류를 알려주세요. <HighLite>*</HighLite></h2>
                                    <br/>
                                    <select
                                        onChange={(e)=>onChangeSelect(e)}
                                    >
                                        <option value="개원 문의">선택하기</option>
                                        <option value="개원 문의">개원 문의</option>
                                        <option value="구매 문의">구매 문의</option>
                                        <option value="입지 문의">입지 문의</option>
                                        <option value="홈페이지 이용 문의">홈페이지 이용 문의</option>
                                        <option value="사업 제휴 문의">사업 제휴 문의</option>
                                        <option value="기타 문의">기타 문의</option>
                                    </select>
                                    <div className="check">
                                        <Input onClick={()=>goToUp(5)} type="button" value="다음 ✔️" /><p>Enter ↵를 누르십시오</p>
                                    </div>
                                </Slide>

                                <Slide
                                    pagination={5}
                                    num={num}
                                >
                                    <Subtitle>5)</Subtitle><h2>자세한 내용을 알려주세요. <HighLite>*</HighLite></h2>
                                    <textarea
                                        placeholder="어떤 내용이라도 좋습니다." 
                                        ref={inputRef5}
                                        value={consultDes}
                                        onChange={(e)=>onChange(e,setConsultDes)}
                                    />
                                    <div className="check">
                                        <Input onClick={()=>goToUp(6)} type="button" value="완료 ✔️" />
                                    </div>
                                </Slide>
                                <Slide
                                    pagination={6}
                                    num={num}
                                >
                                    <SpinnerWrapper>
                                        <ScaleLoader height="50" width="10" color="#6b5ce7" radius="8" />
                                        <br/><br/>
                                        <p>조금만 기다려주세요..!!</p>
                                    </SpinnerWrapper>
                                </Slide>
                                <Slide
                                    pagination={7}
                                    num={num}
                                >
                                    <p>신청이 완료되었습니다.</p>
                                    <h2 style={{
                                        marginTop:30,
                                    }}>담당자가 곧 연락드립니다.</h2>
                                    <div className="check">
                                        <Input onClick={()=>goToUp(1)} type="button" value="확인 완료 ✔️" style={{width:100,marginTop:20}} />
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

export default Home;