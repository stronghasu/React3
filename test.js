Skip to content
Search or jump to…
Pulls
Issues
Marketplace
Explore
 
@stronghasu 
JunseungPark
/
react999
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
react999/src/components/pages/Reference.js /
@JunseungPark
JunseungPark 11.16 수정
Latest commit b9a4754 on 16 Nov 2021
 History
 1 contributor
133 lines (123 sloc)  5.02 KB
   
import axios from "axios";
import React from "react";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Loading from "../layouts/Loading";
import WrapTitle from "../layouts/WrapTitle";
import ReferInfo from "../info/ReferInfo";
import CssReferInfo from "../info/CssReferInfo";
import JavaReferInfo from "../info/JavaReferInfo";
import ContInfo from "../layouts/ContInfo";


class Reference extends React.Component {
    state =  {
        isLoading:true,
        htmlRefer: [],
        cssRefer: [],
        javascriptRefer: [],
        tab: "",
        active:""
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://junseungpark.github.io/react999/src/assets/json/refer.json");
        this.setState({htmlRefer, isLoading : false} )
        console.log(htmlRefer);
    }
    getCssRefer = async () => {
        const {
            data: {
                data: {cssRefer},
            },
        } = await axios.get("https://junseungpark.github.io/react999/src/assets/json/css_refer.json");
        this.setState({cssRefer, isLoading : false} )
        console.log(cssRefer);
    }
    getJavaRefer = async () => {
        const {
            data: {
                data: {javascriptRefer},
            },
        } = await axios.get("https://junseungpark.github.io/react999/src/assets/json/java_refer.json");
        this.setState({javascriptRefer, isLoading : false} )
        console.log(javascriptRefer);
    }


    componentDidMount() {
        setTimeout(()=>{
            this.getRefer();
            this.getCssRefer();
            this.getJavaRefer();
        }, 2000)
    }

    tabEvent(e) {
        this.setState({tab : e})
        console.log(e);
    }


    render(){
        const {isLoading, htmlRefer, javascriptRefer, cssRefer, tab} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading></Loading>
                ) : (
                    <div>
                    <Header></Header>
                    <Contents>
                        <section id="referCont">
                            <div className="container">
                            <WrapTitle text={['REFERENCE','BOOK']}></WrapTitle>
                                <div className="refer__cont">
                                    <div className="table">
                                    <ul className="tab">
                                        <li onClick={() => this.tabEvent(0)} >{tab == 0 ?(<a className="active">HTML</a>):(<a>HTML</a>)}</li>
                                        <li onClick={() => this.tabEvent(1)} >{tab == 1 ?(<a className="active">CSS</a>):(<a>HTML</a>)}</li>
                                        <li onClick={() => this.tabEvent(2)} >{tab == 2 ?(<a className="active">JAVASCRIPT</a>):(<a>HTML</a>)}</li>
                                    </ul>
                                    {tab == 0 ? (
                                        <ul>
                                            {htmlRefer.map((refer) => (
                                                <ReferInfo
                                                key = {refer.id}
                                                refer = {refer}
                                                >
                                                </ReferInfo>
                                            ))}
                                        </ul>
                                    ) : ( tab == 1 ? (
                                        <ul>
                                            {cssRefer.map((refer) => (
                                                <CssReferInfo
                                                key = {refer.id}
                                                cssRefer = {refer}
                                                >
                                                </CssReferInfo>
                                            ))}
                                        </ul>
                                    ):(
                                        <ul>
                                            {javascriptRefer.map((refer) => (
                                                <JavaReferInfo
                                                key = {refer.id}
                                                javaRefer = {refer}
                                                >
                                                </JavaReferInfo>
                                            ))}
                                        </ul>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ContInfo></ContInfo>
                    </Contents>
                    <Footer></Footer> 
                    </div>
                )}
            </div>
        )
    }
}

export default Reference;
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
