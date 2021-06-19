import { Container, GridList } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import _ from 'lodash';
import apiReaction from '../../service/api/apiReaction';
import apiFeed from '../../service/api/apiFeed';
import axios from 'axios';
import loveOn from '../../assets/Reaction/loveOn.svg';
import loveOff from '../../assets/Reaction/loveOff.svg';
import SendIcon from '@material-ui/icons/Send';

const Dashboard = () => {
  const [textValue, setTextValue] = useState('');
  const [textPost, setTextPost] = useState([]);
  const [reaction, setReaction] = useState(false);
  const [reactionLove, setReactionLove] = useState(false);
  const [reactionLike, setReactionLike] = useState(false);

  const Feed = () => {
    const URL = 'https://segware-book-api.segware.io/api';

    const token = localStorage.getItem('token');
    axios
      .get(`${URL}/feeds`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setTextPost(data);
        console.log('data', data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(textPost);
  };

  useEffect(() => {
    Feed();
  }, []);

  // useEffect(() => {
  //   apiReaction(reactionLove, reactionLike);
  // }, [reaction]);

  const handleTextValue = (text) => {
    setTextValue(text.target.value);
    console.log(text.target.value);
  };

  const handleClick = () => {
    if (!textValue) return;

    const content = textValue;
    console.log('content', content);

    apiFeed({ content: content });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      <HeaderDashboard />
      <Container cellHeight={160} cols={3} style={{ height: '100vh' }}>
        <div
          style={{
            marginTop: '2vh',
            display: 'flex',
            justifyContent: 'center',
            alingItems: 'center',
          }}
        >
          <label style={{ fontFamily: 'Poppins', fontSize: '30px' }}>Escreva seu texto</label>
        </div>
        <div
          style={{
            marginTop: '2vh',
            display: 'flex',
            justifyContent: 'center',
            alingItems: 'center',
          }}
        >
          <textarea
            style={{
              fontFamily: 'Poppins',
              width: '500px',
              minWidth: '490px',
              maxWidth: '490px',
              minHeight: '100px',
              maxHeight: '100px',
              fontSize: '20px',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              outline: 'none',
            }}
            aria-label="minimum height"
            rowsMax={15}
            placeholder="Digite seu texto aqui!"
            value={textValue}
            onChange={(event) => handleTextValue(event)}
          />
          <Button
            style={{
              cursor: 'pointer',
              fontFamily: 'Poppins',
              fontWeight: '700',
              color: ' white',
              background: '#115714dd',
              border: 'none',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              outline: 'none',
            }}
            onClick={() => handleClick()}
          >
            <SendIcon />
          </Button>
        </div>

        <div
          style={{
            alingItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              alingItems: 'center',
              justifyContent: 'center',
              display: 'flow-root',
            }}
          >
            {textPost &&
              textPost.map((item, index) => (
                <div
                  style={{
                    borderLeft: '1px solid #DEDEDE',
                    borderTop: '1px solid #DEDEDE',
                    width: '500px',
                    height: '250px',
                    borderRadius: '8px',
                    marginTop: '16px',
                    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div
                    style={{
                      width: '500px',
                      height: '450px',
                      borderRadius: '8px',
                      alingItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      marginTop: '15px',
                    }}
                  >
                    <p
                      style={{
                        maxWidth: '500px',
                        maxHeight: '250px',
                        fontFamily: 'Poppins',
                        marginTop: '15px',
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => setReactionLove(!reactionLove)}
                  >
                    {reactionLove && reactionLove > 0 ? (
                      <img style={{ width: '30px', height: '30px' }} src={loveOff} alt="" />
                    ) : (
                      <img style={{ width: '30px', height: '30px' }} src={loveOn} alt="" />
                    )}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
