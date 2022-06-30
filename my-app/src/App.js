import { Component } from 'react';
import axios from 'axios';
import logo from './assets/区块链.png'
import './App.css';


class App extends Component {
    
    state={
        coinName:['BTC','DASH','ZEC','DOGE','LTC'],
        data:[]
    }

    getData = async()=> {
        let coinName = this.state.coinName
        let result = []
        for (let index = 0; index < coinName.length; index++) {
            await axios.get('https://chain.so/api/v2/get_info/'+coinName[index])
            .then((response)=>{
                let res = response.data.data  
                result.push(res)
                this.setState({
                    data:result
                })
            })                
        }
       
    }
    
    componentDidMount() {        
        this.getData()         
    }
 
  render() {    

    const  data = this.state.data
    return (
        
      <div>
         <header className="header">
          <span>扣因</span>
          <img src={logo}/>
        </header>

        <section className="content">
            <div className="title">OKX今日行情</div>
            <div>
                查看OKX支持的数百种数字货币的最新价格、区块链中的总币数、市值等数据。                       
            </div>
            {/* <!-- 币种导航 --> */}
            <div className="nav">
                <div className="coinclassName">币种</div>
                <div className="others">
                    <div>最新价</div><div>总币数</div><div>市值</div>
                </div>                       
            </div>
            {/* <!-- 币种信息 --> */}
            <div className="coinBase">
                {
                    data.map((item) => {
                        return (                        
                            <div className="coindata" key={item.name}>
                                <div className="coinname">{item.network+ ' '+'|'+' '+ item.name}</div>
                                <div className="coinothers">
                                    <div>${item.price}</div><div>{item.blocks}</div><div>${item.price*item.blocks}</div>
                                </div>                       
                            </div>
                        )
                    })
                } 
            </div>     
                         
        </section>

        {/* <!-- 底部 --> */}
        <footer className="footer">
            <div className="footerName">
                <span>扣因</span>
                <div className="footerImg">
                    <img src={logo} alt="logo"/>
                </div>            
            </div>
            <div>
                <div>关于</div>
                <ul>
                    <li>关于我们</li>
                    <li>认识跟多</li>
                </ul>
            </div>
          
            <div>
                <div>服务</div>
                <ul>
                    <li>历史数据</li>
                    <li>费率标准</li>
                </ul>
            </div>
            
            <div>
                <div>用户支持</div>
                <ul>
                    <li>帮助中心</li>
                    <li>官方验证</li>
                </ul>
            </div>
            
        </footer>

      </div>
    );
  }
}



export default App;
