import React, { useState } from 'react';
import { Tabs, Radio } from 'antd';
import Carousel from "../global/carousel/heroCarousel";
import './a.css';

const { TabPane } = Tabs;

const GenreTabs = () => {
  const [mode, setMode] = useState('top');

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  var books = [
    'Genesis',         'Exodus',          'Leviticus',     'Numbers',
    'Deuteronomy',     'Joshua',          'Judges',        'Ruth',
    '1 Samuel',        '2 Samuel',        '1 Kings',       '2 Kings',
    '1 Chronicles',    '2 Chronicles',    'Ezra',          'Nehemiah',
    'Esther',          'Job',             'Psalm',         'Proverbs',
    'Ecclesiastes',    'Song of Solomon', 'Isaiah',        'Jeremiah',
    'Lamentations',    'Ezekiel',         'Daniel',        'Hosea',
    'Joel',            'Amos',            'Obadiah',       'Jonah',
    'Micah',           'Nahum',           'Habakkuk',      'Zephaniah',
    'Haggai',          'Zechariah',       'Malachi',       'Matthew',
    'Mark',            'Luke',            'John',          'Acts',
    'Romans',          '1 Corinthians',   '2 Corinthians', 'Galatians',
    'Ephesians',       'Philippians',     'Colossians',    '1 Thessalonians', 
    '2 Thessalonians', '1 Timothy',       '2 Timothy',     'Titus',
    'Philemon',        'Hebrews',         'James',         '1 Peter',
    '2 Peter',         '1 John',          '2 John',        '3 John',
    'Jude',            'Revelation'
];

  return (
    <div>
      {/* <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{marginBottom: 8,}}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group> */}
      {/* color: #ff4411; font-size: 48px; font-family: 'Signika', sans-serif; padding-bottom: 10px;  */}
      <div class="container-s">
        <img src="https://i.postimg.cc/kXjTCzrx/pale-43.png" alt="Snow" style={{width:"2%",height:"20%"}} />
        <div class="centered" style={{fontSize: "29px", paddingBottom: "2px", fontWeight: "bold", color:"#313230"}}>Top Genres</div>
      </div>
      {/* <h2 style={{fontSize: "29px", paddingBottom: "2px", fontWeight: "bold", color:"#313230"}}>Top Genres</h2> */}
      <Tabs defaultActiveKey="1" tabPosition={mode} size={'medium'} tabBarGutter={50} style={{ height: 'auto'}}>
        {[
          ...Array.from(
            {
              length: 10,
            },
            (_, i) => i,
          ),
        ].map((i) => (
          <TabPane tab={books[i]} key={i} disabled={i === 28}>
            <Carousel />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default GenreTabs;