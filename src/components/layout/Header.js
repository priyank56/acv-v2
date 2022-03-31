import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  Flex,
  Image,
  MenuButton,
  Button,
  Avatar,
  Segment,
  Layout,
  Divider,
  Card,
  Text,
  DownloadIcon,
  Dialog,
  Input,
  TextArea,
  Alert,
  RedoIcon,
  CloseIcon,
  Dropdown,
} from '@fluentui/react-northstar';
import Logo from '../../Assets/images/logo.png';
import {
  AttendeeIcon,
  CollapseIcon,
  LeaveIcon,
  TranslationIcon,
  ExpandIcon,
  ContactGroupIcon,
  SettingsIcon,
  OptionsIcon,
  PollIcon,
  CheckmarkCircleIcon,
  ChevronDownIcon,
  ContentIcon,
  MenuIcon,
  QuestionCircleIcon,
  WhiteboardIcon,
} from '@fluentui/react-icons-northstar';

import * as Icon from 'react-feather';

import i18n from '../../Helper/i18n';
import axios from 'axios';

import './Header.css';

const url = process.env.REACT_APP_EP_URL_PRODUCTION;

const Header = (props) => {
  var elem = document.documentElement;
  const [isFullscreen, setFullscreen] = React.useState(false);
  const [childrens, showChildrens] = React.useState(false);
  const [ham, setHam] = React.useState(false);
  const [help, setHelp] = React.useState(false);
  const [msgSend, setMsgSend] = React.useState(null);
  const [notification, setNotification] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const [selLan, setSelLan] = React.useState(i18n.language);

  const history = useHistory();

  /* View in fullscreen! */
  function openFullscreen() {
    try {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      setFullscreen(!isFullscreen);
    } catch (err) {
      console.log(err);
    }
  }

  /* Close fullscreen */
  function closeFullscreen() {
    try {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
      setFullscreen(!isFullscreen);
    } catch (err) {
      console.log(err);
    }
  }

  const multilngbtn = {
    content: (
      <Button
        icon={<TranslationIcon />}
        content="Language"
        aria-label="Hover button"
        style={{
          margin: '0',
          padding: '0',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          justifyContent: 'start',
        }}
      />
    ),
    menu: {
      items: [
        {
          content: (
            <Button
              // icon={<Flags.US title="English" />}
              content="English"
              className={selLan != 'en' ? 'FlagBtn' : 'FlagBtn selLan'}
              iconOnly
            />
          ),
          key: 'English',
          onClick: () => {
            setSelLan('en'), i18n.changeLanguage('en');
          },
        },
        {
          content: (
            <Button
              // icon={<Flags.MX title="Spanish" />}
              content="Español"
              className={selLan != 'es' ? 'FlagBtn' : 'FlagBtn selLan'}
              iconOnly
            />
          ),
          key: 'Español',
          onClick: () => {
            setSelLan('es'), i18n.changeLanguage('es');
          },
        },
        {
          content: (
            <Button
              // icon={<Flags.BR title="Portuguese" />}
              content="Português"
              className={selLan != 'pt' ? 'FlagBtn' : 'FlagBtn selLan'}
              iconOnly
            />
          ),
          key: 'Português',
          onClick: () => {
            setSelLan('pt'), i18n.changeLanguage('pt');
          },
        },
        {
          content: (
            <Button
              // icon={<Flags.FR title="French" />}
              content="Français"
              className={selLan != 'fr' ? 'FlagBtn' : 'FlagBtn selLan'}
              iconOnly
            />
          ),
          key: 'Français',
          onClick: () => {
            setSelLan('fr'), i18n.changeLanguage('fr');
          },
        },
        {
          content: (
            <Button
              // icon={<Flags.IN title="Hindi" />}
              content="हिंदी"
              className={selLan != 'hi' ? 'FlagBtn' : 'FlagBtn selLan'}
              iconOnly
            />
          ),
          key: 'हिंदी',
          onClick: () => {
            setSelLan('hi'), i18n.changeLanguage('hi');
          },
        },
      ],
    },
    key: 'Multi-Language',
  };

  const rollBackDB = {
    content: (
      <Button
        icon={<RedoIcon outline size="large" />}
        content="Switch Data"
        style={{
          margin: '0',
          padding: '0',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          justifyContent: 'start',
        }}
      />
    ),
    key: 'rollBackDB-btn',
    onClick: () => {
      setOpen(true);
    },
  };

  const docsbtn = {
    content: (
      <Button
        icon={<WhiteboardIcon outline size="large" />}
        content="Docs"
        style={{
          margin: '0',
          padding: '0',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          justifyContent: 'start',
        }}
      />
    ),
    key: 'Docs-btn',
    onClick: () => history.push('/docs'),
  };

  const helpbtn = {
    content: (
      <Button
        icon={<QuestionCircleIcon outline size="large" />}
        content="Help"
        style={{
          margin: '0',
          padding: '0',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          justifyContent: 'start',
        }}
      />
    ),
    key: 'Help-btn',
    onClick: () => {
      setMsgSend(null);
      setHelp(true);
    },
  };

  const logoutbtn = {
    content: (
      <Button
        icon={<LeaveIcon />}
        content="Logout"
        style={{
          margin: '0',
          padding: '0',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          justifyContent: 'start',
        }}
      />
    ),
    key: 'Logout-btn',
    onClick: () => props.logout(),
  };

  // <Card aria-roledescription="card avatar">
  const profileButton = (
    <MenuButton
      trigger={
        <Card.Header fitted>
          <Flex gap="gap.small">
            {/* ? props.user?.UrlPhoto + props.user?.SASToken */}
            <Avatar
              image={props.user?.UrlPhoto ? props.user?.UrlPhoto : null}
              // label="Copy bandwidth"
              name={props.user?.name.toUpperCase()}
              // status="unknown"
            />
            <Flex column>
              <Text content={props.user?.name} weight="bold" />
              <Text content={props.user?.role} size="small" />
            </Flex>
          </Flex>
        </Card.Header>
      }
      menu={
        props.user && props.user?.actualRole === 'SuperAdmin'
          ? props.user?.actualRole === 'SuperAdmin' &&
            props.user?.role === 'Admin'
            ? [multilngbtn, rollBackDB, docsbtn, helpbtn, logoutbtn]
            : [
                multilngbtn,
                {
                  content: (
                    <Button
                      icon={<ContentIcon outline size="large" />}
                      content="Startup"
                      style={{
                        margin: '0',
                        padding: '0',
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        border: 'none',
                        justifyContent: 'start',
                      }}
                    />
                  ),
                  key: 'Startup-btn',
                  onClick: () => history.push('/start-up'),
                },
                docsbtn,
                helpbtn,
                {
                  content: (
                    <Button
                      icon={<Icon.User />}
                      content="Profile"
                      style={{
                        margin: '0',
                        padding: '0',
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        border: 'none',
                        justifyContent: 'start',
                      }}
                    />
                  ),
                  key: 'Download-Invoice-btn',
                  onClick: () => {
                    window.open('https://www.acv.app/profile', '_blank');
                  },
                },
                logoutbtn,
              ]
          : [multilngbtn, docsbtn, helpbtn, logoutbtn]
      }
      mouseLeaveDelay={0}
      on={document.documentElement.clientWidth < 1060 ? 'click' : 'hover'}
      className="Avatar"
      key="menuBtn"
    />
  );
  const inputItems = [
    { header: 'Report by subject', value: 'report-by-subject' },
    { header: 'Report by student', value: 'report-by-student' },
    { header: 'Report by teacher', value: 'report-by-teacher' },
    { header: 'Special report', value: 'special-report' },
  ];
  return (
    <div className="Header">
      {notification ? (
        notification.status === 'Error' ? (
          <Alert danger content={notification.msg} />
        ) : (
          <Alert success content={notification.msg} />
        )
      ) : (
        ''
      )}
      <Dialog
        onConfirm={() => {
          const email = document.querySelector('#senderEmail').value;
          const name = document.querySelector('#senderName').value;
          const message = document.querySelector('#helpMessage').value;
          const API =
            props.user?.role === 'Admin' || props.user?.role === 'SuperAdmin'
              ? '/api/school/help-clientAdmin-to-acvAdmin'
              : '/api/school/help-client-to-admin';
          axios
            .post(`${url}${API}`, {
              email: email || 'pd@devtim.tech',
              Name: name,
              Message: message,
              SchoolName:
                props.user?.schoolInfo?.School || 'No School Name Provided',
            })
            .then((res) => {
              setMsgSend({
                status: 'Success',
                msg: 'Mail notification has been send successfully, you will get reply via email.',
              });
            })
            .catch((err) => {
              console.log(err);
              setMsgSend({
                status: 'Error',
                msg: "Mail notification couldn't be send. Try to contact Tangible IT Admins.",
              });
            });
        }}
        onCancel={() => setHelp(false)}
        cancelButton="Close"
        confirmButton="Send"
        content={
          <Flex gap="gap.small" column>
            <label htmlFor="senderEmail">Your Email</label>
            <Input
              type="text"
              id="senderEmail"
              placeholder="Enter your email"
              defaultValue={props.user?.username}
              showSuccessIndicator
              disabled
              fluid
            />
            <label htmlFor="senderName">Your Name</label>
            <Input
              type="text"
              id="senderName"
              placeholder="Enter your name"
              defaultValue={props.user?.name}
              showSuccessIndicator
              disabled
              fluid
            />
            <label htmlFor="helpMessage">Enter Your Message</label>
            <TextArea
              type="text"
              id="helpMessage"
              placeholder="Type Your Message Here"
              resize="vertical"
              fluid
              height="200"
            />
            {msgSend ? (
              msgSend.status === 'Error' ? (
                <Alert
                  danger
                  content={msgSend.msg}
                  dismissible
                  dismissAction={{
                    'aria-label': 'close',
                  }}
                />
              ) : (
                <Alert
                  success
                  content={msgSend.msg}
                  // dismissible
                  // dismissAction={{
                  //   "aria-label": "close",
                  // }}
                />
              )
            ) : (
              ''
            )}
          </Flex>
        }
        header={
          props.user?.role === 'Admin' || props.user?.role === 'SuperAdmin'
            ? "Ask to ACV's Admin"
            : "Ask to your Organization's Admin"
        }
        open={help}
      />
      <Dialog
        open={open}
        onConfirm={() => {
          axios
            .post(`${url}/api/startup/update-DB-data${props.user.slug}`, {
              plan: 'Current',
              email: props.user.username,
            })
            .then((res) => {
              props.getDb();
              setNotification({
                status: 'Success',
                msg: 'Database has been updated successfully!',
              });
              setTimeout(() => {
                setNotification(null);
              }, 3000);
            })
            .catch((err) => {
              console.log(err);
              // setNotification({
              //   status: "Error",
              //   msg: "Something went wrong! contact to customer service if problem not getting solved!",
              // });
              // setTimeout(() => {
              //   setNotification(null);
              // }, 3000);
            });
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        confirmButton="Yes"
        cancelButton="No"
        content="This action will switch your database to current db, are you sure about switching to your current acv?"
        header="Switch back to own database"
      />
      <Flex
        gap="gap.small"
        style={{ height: '60px', backgroundColor: '#F3F2F1' }}
      >
        <Link
          to="/attendance"
          style={{
            width: '166px',
          }}
        >
          <Image
            src={
              props.user?.dbData?.db_selected === 'Current'
                ? props.user?.schoolInfo?.SchoolLogo
                  ? props.user?.schoolInfo?.SchoolLogo + props.user?.SASToken
                  : Logo
                : Logo
            }
            style={{
              margin: 0,
              marginLeft: '31px',
              marginTop: '10px',
              maxHeight: '40px',
              borderRadius: '2px',
              backgroundSize: 'cover',
            }}
            title={props.user?.schoolInfo?.School || 'Tangible IT'}
          />
        </Link>
        <>
          <Flex
            gap="gap.medium"
            style={{ paddingBlock: '20px' }}
            className="ctr-right"
          >
            {props.path !== 'settings' && (
              <OptionsIcon
                outline
                size="large"
                className="ctrl"
                onClick={() => {
                  if (document.querySelector('.h-ctr')) {
                    document.querySelector('.h-ctr').classList.add('s-ctr');
                    document.querySelector('.h-ctr').classList.remove('h-ctr');
                  } else if (document.querySelector('.s-ctr')) {
                    document.querySelector('.s-ctr').classList.add('h-ctr');
                    document.querySelector('.s-ctr').classList.remove('s-ctr');
                  }
                }}
              />
            )}
            <MenuIcon
              outline
              size="large"
              className="Ham ctrl"
              onClick={() => setHam(!ham)}
            />
            {/* <div className="Ham" onClick={() => setHam(!ham)}>
            <div className="line ln1"></div>
            <div className="line ln2"></div>
          </div> */}
          </Flex>

          <div className={ham ? 'ham_container active' : 'ham_container'}>
            <div className="cover">
              <Flex column>
                <Segment
                  content={
                    <Layout
                      gap="1rem"
                      vertical={false}
                      start={<ContactGroupIcon outline size="large" />}
                      main="Attendance"
                      end=""
                      style={{
                        color:
                          props.path === 'attendance' ? '#68689E' : '#544F53',
                      }}
                      onClick={() => {
                        history.push('/attendance');
                      }}
                    />
                  }
                />

                <Segment
                  content={
                    <>
                      <Layout
                        gap="1rem"
                        vertical={false}
                        start={<PollIcon outline size="large" />}
                        main="Dashboard"
                        end={<ChevronDownIcon />}
                        style={{
                          color:
                            props.path === '/report-by-subject' ||
                            props.path === '/report-by-student' ||
                            props.path === '/report-by-teacher' ||
                            props.path === '/special-report'
                              ? '#68689E'
                              : '#544F53',
                        }}
                        onClick={() => showChildrens(!childrens)}
                      />
                      {childrens ? (
                        <Flex column className="childrens">
                          <Segment
                            content="Report by Subjects"
                            style={{
                              color:
                                props.path === '/report-by-subject'
                                  ? '#68689E'
                                  : '#544F53',
                            }}
                            onClick={() => {
                              history.push('/report-by-subject');
                            }}
                          />
                          <Segment
                            content="Report by Students"
                            style={{
                              color:
                                props.path === '/report-by-student'
                                  ? '#68689E'
                                  : '#544F53',
                            }}
                            onClick={() => {
                              history.push('/report-by-student');
                            }}
                          />
                          <Segment
                            content="Report by Teachers"
                            style={{
                              color:
                                props.path === '/report-by-teacher'
                                  ? '#68689E'
                                  : '#544F53',
                            }}
                            onClick={() => {
                              history.push('/report-by-teacher');
                            }}
                          />
                          <Segment
                            content="Special Report"
                            style={{
                              color:
                                props.path === '/special-report'
                                  ? '#68689E'
                                  : '#544F53',
                            }}
                            onClick={() => {
                              history.push('/special-report');
                            }}
                          />
                        </Flex>
                      ) : null}
                    </>
                  }
                />
                <Segment
                  content={
                    <Layout
                      gap="1rem"
                      vertical={false}
                      start={<WhiteboardIcon outline size="large" />}
                      main="Whiteboard"
                      end=""
                      style={{
                        color:
                          props.path === 'whiteboard' ? '#68689E' : '#544F53',
                      }}
                      onClick={() => {
                        history.push('/whiteboard');
                      }}
                    />
                  }
                />
                <Segment
                  content={
                    <Layout
                      gap="1rem"
                      vertical={false}
                      start={<CheckmarkCircleIcon outline size="large" />}
                      main="Attendance History"
                      end=""
                      style={{
                        color: props.path === 'history' ? '#68689E' : '#544F53',
                      }}
                      onClick={() => {
                        history.push('/history');
                      }}
                    />
                  }
                />
                <Segment
                  content={
                    <Layout
                      gap="1rem"
                      vertical={false}
                      start={<SettingsIcon outline size="large" />}
                      main="Settings"
                      end=""
                      style={{
                        color:
                          props.path === 'settings' ? '#68689E' : '#544F53',
                      }}
                      onClick={() => {
                        history.push('/settings');
                      }}
                    />
                  }
                />
                <Divider className="ham-dv" />
                <Segment
                  content={
                    <Layout
                      gap="0rem"
                      vertical={false}
                      main={profileButton}
                      style={{
                        color: '#544F53',
                      }}
                    />
                  }
                />
              </Flex>
            </div>
          </div>

          <nav style={{ paddingTop: '17px', display: 'flex' }}>
            <Link
              to="/attendance"
              className={props.path === 'attendance' ? 'activeBtn' : 'button'}
            >
              Attendance
            </Link>
            {props.user &&
            (props.user?.role === 'Admin' ||
              props.user?.role === 'SuperAdmin') ? (
              <>
                {/* <Link className="button"> */}
                {/* // onAdd: (item) => history.push("/item"), */}
                <>
                  <Dropdown
                    items={inputItems}
                    value="Dashboard"
                    checkable
                    getA11ySelectionMessage={{
                      onAdd: (item) => {
                        // console.log("item - ", item.value);
                        history.push(`/${item.value}`);
                      },
                    }}
                    className={
                      props.path === '/report-by-subject' ||
                      props.path === '/report-by-student' ||
                      props.path === '/report-by-teacher' ||
                      props.path === '/special-report'
                        ? 'activeBtn DashNav'
                        : 'DashNav'
                    }
                  />
                </>
                {/* </Link> */}
                <Link
                  to="/whiteboard"
                  className={
                    props.path === 'whiteboard' ? 'activeBtn' : 'button'
                  }
                >
                  Whiteboard
                </Link>
                <Link
                  to="/settings"
                  className={props.path === 'settings' ? 'activeBtn' : 'button'}
                >
                  Settings
                </Link>
              </>
            ) : (
              ''
            )}
            <Button
              text
              circular
              icon={isFullscreen ? <CollapseIcon /> : <ExpandIcon />}
              onClick={isFullscreen ? closeFullscreen : openFullscreen}
              title={isFullscreen ? 'Close Full Screen' : 'Full Screen'}
              style={{
                marginLeft: '12px',
                minWidth: '2rem',
                height: 'auto',
                display: 'block',
              }}
            />
            <span
              className={
                props.path === 'attendance'
                  ? 'abc att'
                  : props.path === '/report-by-subject'
                  ? 'abc das1'
                  : props.path === '/report-by-student'
                  ? 'abc das2'
                  : props.path === '/report-by-teacher'
                  ? 'abc das3'
                  : props.path === '/special-report'
                  ? 'abc das4'
                  : props.path === 'whiteboard'
                  ? 'abc wbrd'
                  : props.path === 'settings'
                  ? 'abc set'
                  : props.path === 'history'
                  ? 'abc hist'
                  : 'abc'
              }
            ></span>
          </nav>
          <div className="rightNav">
            {props.path === 'whiteboard' && (
              <OptionsIcon
                outline
                size="large"
                className="ctrl mt-2 mr-3"
                onClick={() => {
                  if (document.querySelector('.h-ctr')) {
                    document.querySelector('.h-ctr').classList.add('s-ctr');
                    document.querySelector('.h-ctr').classList.remove('h-ctr');
                  } else if (document.querySelector('.s-ctr')) {
                    document.querySelector('.s-ctr').classList.add('h-ctr');
                    document.querySelector('.s-ctr').classList.remove('s-ctr');
                  }
                }}
              />
            )}
            <Link
              to="/history"
              className={
                props.path === 'history'
                  ? 'activeTab mr-3 mt-2'
                  : 'button mr-3 mt-2'
              }
            >
              <AttendeeIcon
                style={{ marginRight: '8px', marginBottom: '3px' }}
              />
              Attendance History
            </Link>

            {profileButton}
          </div>
        </>
      </Flex>
    </div>
  );
};

export default Header;
