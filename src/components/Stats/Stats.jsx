import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from './../../context/FriendContext';

const Stats = () => {
    const { contectNow} = useContext(FriendsContext);

    const totalText = contectNow.filter(item => item.type === "text");
    const totalCall = contectNow.filter(item => item.type === "call");
    const totalVideo = contectNow.filter(item => item.type === "video");

    const data = [
      { name: 'Text', value: totalText.length, fill: '#0088FE' },
      { name: 'Call', value: totalCall.length, fill: '#00C49F' },
      { name: 'Video', value: totalVideo.length, fill: '#FFBB28' },
    ];
    return (
        <div>
            <h1>this is stas page </h1>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Stats;