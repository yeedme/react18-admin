import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeMassageCard from "../components/home/HomeMassageCard";
import HomeWhoToFollow from "../components/home/HomeWhoToFollow";
import HomeTrendCard from "../components/home/HomeTrendCard";
import jack from "../assets/imgsvg/jack.svg";
import jeri from "../assets/imgsvg/jeri.svg";
import jerry from "../assets/imgsvg/jerry.svg";
import jon from "../assets/imgsvg/jon.svg";
import jordan from "../assets/imgsvg/jordan.svg";

const initial=[{
  avatar:jack,
  id:'Petter Paker',
  email:"@peterpaker",
  title:"关于该语言的文字和历史的一些事",
  context:"网络上有许多服务可以生成随机文本-看起来像真实文本的随机单词的无意义集合。每个单词单独地都具有某种含义，但在一起读起来就是异端。为了获得正常的文本，仅凭随机替换是不够的-您需要神经网络。用于填充测试站点和布局的随机文本。成功的政客的语音发生器。 ",
  like:23,
  comment:6,
  readed:54
},
{
  avatar:jeri,
  id:'Petter Paker',
  email:"@peterpaker",
  title:"Lorem ipsum dolor 是什么意思",
  context:"Lorem ipsum dolor sat amet 。图形和排版操作员很清楚这一点，实际上所有涉及通信领域的职业都与这些词有稳定的关系，但它是什么？ Lorem ipsum 是一个 虚拟文本 没有任何意义。 ",
  like:72,
  comment:32,
  readed:180
},{
  avatar:jerry,
  id:'Petter Paker',
  email:"@peterpaker",
  title:"始终处于",
  context:"焰为汗附元脖疲烦沙柏弹耍倍谣败礼集墙茅课烫见金届睡录兼翅杂逐 ",
  like:310,
  comment:334,
  readed:761,
},{
  avatar:jon,
  id:'Petter Paker',
  email:"@peterpaker",
  title:"一天掉多少根头发",
  context:"邓拓曾经说过，越是没有本领的就越加自命不凡。这不禁令我深思一天掉多少根头发的发生，到底需要如何做到，不一天掉多少根头发的发生，又会如何产生。 经过上述讨论问题的关键究竟为何?",
  like:30,
  comment:310,
  readed:412
},{
  avatar:jon,
  id:'Petter Paker',
  email:"@peterpaker",
  title:"what????????",
  context:"Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Poison ivy grew through the fence they said was impenetrable. He found his art never progressed when he literally used his sweat and tears.",
  like:43,
  comment:76,
  readed:154
},{
  avatar:jordan,
  id:'Petter Paker',
  email:"@peterpaker",
  title:"Orange fickle blue guy",
  context:"Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Poison ivy grew through the fence they said was impenetrable. He found his art never progressed when he literally used his sweat and tears.",
  like:3,
  comment:0,
  readed:18,
}
]
function Home() {
  return (
    <>
      <div className="grid grid-cols-3 grid-row-1 gap-4">
        <div className="col-span-2">
          <HomeBanner />
          {
            initial.map((t,index)=>{
              return (
                <HomeMassageCard key={index} {...t}/>
              )
            })
          }
         

        </div>
        <div className="col-span-1">
          <HomeWhoToFollow />
          <HomeTrendCard />
        </div>
      </div>
    </>
  );
}

export default Home;
