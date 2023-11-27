import React from 'react';

const CommentCard = ({item}) => {

    const { userComment,commentId,displayName} = item
    return (
        <div className="card w-96 bg-base-300 shadow-xl mb-5">
  <div className="card-body">
    <p className='-mb-7'>{displayName}</p>
    <div className="divider"></div> 
    <p className='-mt-5'>{userComment}</p>
  </div>
</div>
    );
};

export default CommentCard;