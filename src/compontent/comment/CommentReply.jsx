import React, { useEffect } from 'react'
import { Comment, List, Tooltip } from 'antd';
 
export default function CommentReply(props) {
  const {comment,name,AvatarImg}=props
  useEffect(()=>{
    console.log(props);
  },[])
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: name,
      avatar: AvatarImg,
      content: (
        <p>{comment}
        </p>
      ),
      datetime: (
        <Tooltip >
          <span>8 hours ago</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: name,
      avatar: AvatarImg,
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip>
          <span>9 hours ago</span>
        </Tooltip>
      ),
    },
  ];
  
  return (
    <List
    className="comment-list"
    header={`${data.length} replies`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
  )
}
