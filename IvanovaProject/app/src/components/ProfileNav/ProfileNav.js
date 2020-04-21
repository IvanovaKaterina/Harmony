import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProfileReceptions from '../ProfileReceptions';
import ProfilePersonal from '../ProfilePersonal';
import ProfileLogin from '../ProfileLogin';
import 'react-tabs/style/react-tabs.css';
import './ProfileNav.css';

const REGISTRY_DATA = 'Запись на услуги';
const PERSONAL_DATA = 'Изменение личных данных';
const LOGIN_DATA = 'Изменение параметров входа';

const ProfileNav = () => {
  return(
    <Tabs>
      <TabList>
        <Tab>{REGISTRY_DATA}</Tab>
        <Tab>{PERSONAL_DATA}</Tab>
        <Tab>{LOGIN_DATA}</Tab>
      </TabList>
      <TabPanel>
        <ProfileReceptions/>
      </TabPanel>
      <TabPanel>
        <ProfilePersonal/>
      </TabPanel>
      <TabPanel>
        <ProfileLogin/>
      </TabPanel>
    </Tabs>
  )
}

export default ProfileNav;