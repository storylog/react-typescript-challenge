import React from 'react';

interface IPropsCommentItem {
  name: string;
  comment: string;
  avatar: string;
}

const CommentItem = (props: IPropsCommentItem):JSX.Element => {
  return (
    <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
      <div className="flex flex-row justify-center mr-2">
        <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src={props.avatar} />
        <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">@{props.name}</h3>
      </div>
      <p className="text-gray-600 text-lg text-center md:text-left ">
        {props.comment}
      </p>
    </div>
  );
}

export default CommentItem;
