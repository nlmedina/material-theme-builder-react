import React, { Fragment } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import './App.scss';

const App: React.FC = () => {
  return (
    <Fragment>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon="menu" onClick={() => console.log('click')} />
            </TopAppBarIcon>
            <TopAppBarTitle>Material Design Sample</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <Grid>
        <Row>
          <Cell columns={4}>
            <div>
              <Button raised>Does this work?</Button>
            </div>
          </Cell>
          <Cell columns={4}>Cricket</Cell>
          <Cell columns={4}>StarCraft</Cell>
        </Row>
        <Row>
          <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>
            Tennis
          </Cell>
          <Cell desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>
            Cricket
          </Cell>
          <Cell desktopColumns={4} order={1} phoneColumns={4} tabletColumns={4}>
            StarCraft
          </Cell>
        </Row>
        <Row>
          <Cell columns={4}>
            <Row>
              <Cell desktopColumns={8} phoneColumns={2} tabletColumns={5}>
                Tennis
              </Cell>
              <Cell desktopColumns={4} phoneColumns={2} tabletColumns={3}>
                Cricket
              </Cell>
            </Row>
          </Cell>
          <Cell columns={4}> - </Cell>
          <Cell columns={4}> - </Cell>
        </Row>
      </Grid>
    </Fragment>
  );
};

export default App;
