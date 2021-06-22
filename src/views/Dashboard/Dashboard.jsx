import { Container, Grid, GridList } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import _ from 'lodash';
import apiReaction from '../../service/api/apiReaction';
import apiFeed from '../../service/api/apiFeed';
import axios from 'axios';
import loveOn from '../../assets/Reaction/loveOn.png';
import loveOff from '../../assets/Reaction/loveOff.png';
import likeOn from '../../assets/Reaction/likeOn.png';
import likeOff from '../../assets/Reaction/likeOff.png';

import SendIcon from '@material-ui/icons/Send';

const Dashboard = () => {
  const [textValue, setTextValue] = useState('');
  const [textPost, setTextPost] = useState([]);
  const [reaction, setReaction] = useState({});

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
        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  const React = (reaction) => {
    const axios = require('axios');

    const URL = 'https://segware-book-api.segware.io/api';

    const token = localStorage.getItem('token');
    axios
      .post(
        `${URL}/reaction`,

        reaction,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        if (response.status == 201 || response.status == 200) {
          Feed();
          //
        }
      });
  };

  useEffect(() => {
    window.history.forward(1);
    Feed();
  }, []);

  function gerar_cor() {
    return (
      '#' +
      parseInt(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')
    );
  }

  const handleTextValue = (text) => {
    setTextValue(text.target.value);
  };

  const handleClick = () => {
    if (!textValue) return;

    const content = textValue;

    apiFeed({ content: content });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleReaction = (idFeed, like, love) => {
    const feedReaction = {
      feedId: idFeed,
      like: like,
      love: love,
    };
    React(feedReaction);
  };
  return (
    <div>
      <HeaderDashboard />
      <Container
        cellHeight={160}
        cols={3}
        style={{
          height: '100vh',
          width: '100vw',
          display: 'inline',
          justifyContent: 'center',
          alingItems: 'center',
        }}
      >
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
            maxLength={200}
            style={{
              fontFamily: 'Poppins',
              width: '500px',
              minWidth: '450px',
              maxWidth: '450px',
              minHeight: '100px',
              maxHeight: '100px',
              fontSize: '20px',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
              outline: 'none',
              marginBottom: '20px',
            }}
            aria-label="minimum height"
            rowsMax={15}
            placeholder="Digite seu texto aqui..."
            value={textValue}
            onChange={(event) => handleTextValue(event)}
          />
          <Button
            style={{
              cursor: 'pointer',
              fontFamily: 'Poppins',
              fontWeight: '700',
              color: ' white',
              background: '#3D4DDB',
              marginBottom: '20px',
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
            width: '100vw',
          }}
        >
          <Grid
            container
            style={{ alingItems: 'center', justifyContent: 'center', display: 'flex' }}
          >
            {textPost &&
              textPost.map((item, index) => (
                <Grid
                  item
                  xs={11}
                  sm={9}
                  md={6}
                  lg={3}
                  xl={3}
                  style={{
                    border: `3px solid ${gerar_cor()}`,
                    width: '200px',
                    height: '300px',
                    borderRadius: '8px',

                    marginTop: '26px',
                    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
                    background: `#f8f8f8`,
                    // padding: 10,
                    margin: 5,
                  }}
                >
                  <div
                    style={{
                      width: '450px',
                      maxWidth: '450px',
                      height: '500px',
                      borderRadius: '8px',
                      alingItems: 'center',
                      justifyContent: 'space-between',
                      display: 'flex',
                      marginTop: '15px',
                      wordWrap: 'break-word',
                    }}
                  >
                    <div
                      style={{
                        width: '420px',

                        height: '180px',
                        wordWrap: 'break-word',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '1rem',
                          marginTop: '8px',
                          marginLeft: '8px',
                          padding: 10,
                        }}
                      >
                        {item.content}
                      </p>
                    </div>
                    <div
                      style={{
                        marginTop: '8px',
                      }}
                    >
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          handleReaction(item.id, item.activeUserLikedIt, !item.activeUserLovedIt)
                        }
                      >
                        {item.activeUserLovedIt > 0 ? (
                          <img style={{ width: '30px', height: '30px' }} src={loveOn} alt="" />
                        ) : (
                          <img style={{ width: '30px', height: '30px' }} src={loveOff} alt="" />
                        )}
                      </span>
                      <p style={{ fontFamily: 'Poppins' }}>{item.loves}</p>
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          handleReaction(item.id, !item.activeUserLikedIt, item.activeUserLovedIt)
                        }
                      >
                        {item.activeUserLikedIt > 0 ? (
                          <img style={{ width: '30px', height: '30px' }} src={likeOn} alt="" />
                        ) : (
                          <img style={{ width: '30px', height: '30px' }} src={likeOff} alt="" />
                        )}
                      </span>
                      <p style={{ fontFamily: 'Poppins' }}>{item.likes}</p>
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
