import React, {  useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

const ReplyModal = (props) => {

  const [open, setOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [addComment, { error }] = useMutation(ADD_COMMENT);
  //pass down postId from the main container
  console.log(props.postId);

  const handleReplySubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addComment({
        variables: {
          postId: props.postId,
          commentText: commentText,
          commentAuthor: "james",
        },
      });

      setCommentText("");
      setOpen(false)
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText") {
      setCommentText(value);
    }
  };
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="tiny"
      trigger={<a>Reply</a>}
    >
      <Header icon>
        <Icon name="reply" />
        Add Reply Here
      </Header>
      <Modal.Content>
        <Form reply>
          <Form.TextArea 
          name="commentText"
          placeholder="Enter comment..." 
          value={commentText}
          onChange={handleChange}
           />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Close
        </Button>
        <Button color="green" inverted onClick={handleReplySubmit}>
          <Icon name="checkmark" /> Reply
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ReplyModal;