import React from 'react';
import type { StatisticTimerProps } from 'antd';
import { Button, Card, Col, Input, Row, Statistic } from 'antd';
import Count from '@/components/Count';

const { Timer } = Statistic;

const onChange: StatisticTimerProps['onChange'] = (value) => {
  console.log('Timer changed:', value);
};

const App: React.FC = () => {
  const [deadline, setDeadline] = React.useState<number | null>(null);
  const [running, setRunning] = React.useState(false);
const [lapTimes, setLapTimes] = React.useState<number[]>([]);

const handleLap = () => {
  if (deadline && running) {
    const now = Date.now();
    const remaining = deadline - now;
    if (remaining > 0) {
      setLapTimes((prev) => [...prev, remaining]);
    }
  }
};
  const handleStart = () => {
    setDeadline(Date.now() + 10 * 60 * 1000);
    setRunning(true);
    setLapTimes([]); // Reset laps on new start
  };

  const handleStop = () => {
    setDeadline(null);
    setRunning(false);
  };
   return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card  style={{ width: '400px', textAlign: 'center' }}>
        <Statistic title="Countdown Timer" value={deadline ? new Date(deadline).toLocaleTimeString() : 'Not Set'} />
        <Input type='number' placeholder="Enter timer duration in minutes"
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              setDeadline(Date.now() + parseInt(value, 10) * 60 * 1000);
              setRunning(true);
              setLapTimes([]); // Reset laps on new input
            } else {
              setDeadline(null);
              setRunning(false);
              setLapTimes([]);
            }
          }}
          style={{ margin: '16px 0' }}
        />
      <Row gutter={16}>
        <Col span={12}>
          <Timer
            format="HH:mm:ss"
            onChange={onChange}
            value={deadline ?? undefined}
            style={{ fontSize: '24px', marginBottom: '16px' }}
            type="countdown"
          />
        </Col>
        <Col span={12}>
          <Button type="primary" onClick={handleStart} disabled={running}>
            Start Timer
          </Button>
          <Button style={{ marginLeft: '8px' }} onClick={handleStop} disabled={!running}>
            Stop Timer
          </Button>
          <Button style={{ marginLeft: '8px' }} onClick={handleLap} disabled={!running || !deadline}>
            Lap
          </Button>
        </Col>
      </Row>
      {lapTimes.length > 0 && (
  <div style={{ marginTop: '16px', textAlign: 'left' }}>
    <strong>Lap Times:</strong>
    <ol>
      {lapTimes.map((lap, idx) => {
        const formatted = new Date(lap).toISOString().substr(11, 8);
        let diff = '';
        if (idx > 0) {
          const delta = lapTimes[idx - 1] - lap;
          const diffDate = new Date(Math.abs(delta));
          diff = (delta >= 0 ? '-' : '+') + diffDate.toISOString().substr(11, 8);
        }
        return (
          <li key={idx}>
            {formatted}
            {idx > 0 && (
              <span style={{ marginLeft: 8, color: '#888' }}>
                (Δ {diff})
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </div>
)}
      <Count />
      </Card>
    </div>
  );
};
export default App;