import React, { Component } from 'react';
import FriendItem from './FriendItem'
class FriendList extends Component {
  render() {
    let peopleList = ['https://media.licdn.com/dms/image/C4E03AQG8zH-4TrlRHg/profile-displayphoto-shrink_200_200/0?e=1528390800&v=beta&t=55mQ2dXyO7kiYJpT0_gYXkEwgk7Q2DrL854vVf1R1fw','https://media.licdn.com/dms/image/C5603AQEFOwFfYeMBGQ/profile-displayphoto-shrink_800_800/0?e=1528390800&v=beta&t=y4o2IyQHmbtc6PN8wdSb0w6kXb3GvxIE0UCbJXQ7wfU','https://media.licdn.com/dms/image/C5603AQH9QOjS9o5yEw/profile-displayphoto-shrink_800_800/0?e=1528390800&v=beta&t=lMLy8NY7p1QRKP_ZMFoUiT39aIRI2p6gGA7JTfgYKUI','https://media.licdn.com/dms/image/C4E03AQEWQQVGBiwk-Q/profile-displayphoto-shrink_800_800/0?e=1528390800&v=beta&t=G31JyZlHpsbCP_SJqv-xWr7MPxkcZZJYa5ej65Qr_ng']
    let nameList = ['Noel','Greg','Joe','Hassan']
    peopleList = peopleList.map((src,indx)=>{
      return <FriendItem source={src} friendName='noel'/>
    })
    return (
      <div class="friendNav grid-col-4 grid-row-2 no-style text-center color-white font-mild">
        {peopleList}
      </div>
    );
  }
}

export default FriendList;
