import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { FriendsContext } from './../../context/FriendContext';
import { FaHeart, FaPhoneAlt, FaRegSmile, FaStar, FaChartLine } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { GiRose, GiLipstick } from 'react-icons/gi';

const Stats = () => {
    const { contectNow } = useContext(FriendsContext);

    const totalText = contectNow.filter(item => item.type === "text");
    const totalCall = contectNow.filter(item => item.type === "call");
    const totalVideo = contectNow.filter(item => item.type === "video");

    const totalConnections = contectNow.length;

    const data = [
        { name: 'Text', value: totalText.length, fill: '#EC4899', color: '#EC4899', icon: '💬' },
        { name: 'Call', value: totalCall.length, fill: '#10B981', color: '#10B981', icon: '📞' },
        { name: 'Video', value: totalVideo.length, fill: '#8B5CF6', color: '#8B5CF6', icon: '🎥' },
    ];

    // Custom colors for pie chart
    const COLORS = ['#EC4899', '#10B981', '#8B5CF6'];

    // Custom Tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-pink-200'>
                    <p className='font-semibold text-gray-800'>{payload[0].name}</p>
                    <p className='text-2xl font-bold text-pink-600'>{payload[0].value}</p>
                    <p className='text-xs text-gray-500'>connections</p>
                </div>
            );
        }
        return null;
    };

    // Custom Legend
    const renderLegend = (props) => {
        const { payload } = props;
        return (
            <div className='flex flex-wrap justify-center gap-4 mt-6'>
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} className='flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm'>
                        <div className='w-3 h-3 rounded-full' style={{ backgroundColor: entry.color }}></div>
                        <span className='text-sm font-medium text-gray-700'>{entry.value}</span>
                        <span className='text-lg font-bold' style={{ color: entry.color }}>{entry.payload.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    // Find most used connection type
    const mostUsedType = data.reduce((max, item) => item.value > max.value ? item : max, data[0]);
    const totalPercentage = totalConnections > 0 ? ((mostUsedType.value / totalConnections) * 100).toFixed(0) : 0;

    return (
        <div className='min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-10'>
                    <div className='flex justify-center gap-2 mb-4'>
                        <FaHeart className='text-pink-400 text-3xl animate-pulse' />
                        <FaChartLine className='text-rose-400 text-3xl' />
                        <FaHeart className='text-pink-400 text-3xl animate-pulse' />
                    </div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent font-serif'>
                        Connection Statistics
                    </h1>
                    <p className='text-gray-600 mt-2'>✨ Track your friendship journey ✨</p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
                    {/* Total Connections Card */}
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-pink-100'>
                        <div className='bg-gradient-to-br from-pink-100 to-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <FaHeart className='text-pink-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-pink-600 mb-2'>{totalConnections}</p>
                        <p className='text-gray-600 font-medium'>Total Connections</p>
                        <p className='text-xs text-gray-400 mt-2'>Moments shared</p>
                    </div>

                    {/* Text Messages Card */}
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100'>
                        <div className='bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <IoIosText className='text-blue-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-blue-600 mb-2'>{totalText.length}</p>
                        <p className='text-gray-600 font-medium'>Text Messages</p>
                        <p className='text-xs text-gray-400 mt-2'>💬 Sweet conversations</p>
                    </div>

                    {/* Phone Calls Card */}
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-green-100'>
                        <div className='bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <FaPhoneAlt className='text-green-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-green-600 mb-2'>{totalCall.length}</p>
                        <p className='text-gray-600 font-medium'>Phone Calls</p>
                        <p className='text-xs text-gray-400 mt-2'>📞 Heart-to-heart talks</p>
                    </div>

                    {/* Video Calls Card */}
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-purple-100'>
                        <div className='bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <IoVideocam className='text-purple-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-purple-600 mb-2'>{totalVideo.length}</p>
                        <p className='text-gray-600 font-medium'>Video Calls</p>
                        <p className='text-xs text-gray-400 mt-2'>🎥 Face-to-face moments</p>
                    </div>
                </div>

                {/* Chart Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Pie Chart */}
                    <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-pink-100'>
                        <h2 className='text-xl font-bold text-gray-800 mb-4 text-center'>Connection Distribution</h2>
                        <div className='flex justify-center'>
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        innerRadius="60%"
                                        outerRadius="80%"
                                        cornerRadius="50%"
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={true}
                                        animationDuration={1000}
                                        animationBegin={0}
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend content={renderLegend} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Insights Section */}
                    <div className='space-y-6'>
                        {/* Most Used Method */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-pink-100'>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='bg-gradient-to-br from-pink-100 to-rose-100 rounded-full p-2'>
                                    <FaStar className='text-pink-500 text-xl' />
                                </div>
                                <h2 className='text-xl font-bold text-gray-800'>Favorite Connection Method</h2>
                            </div>
                            {totalConnections > 0 ? (
                                <div className='text-center'>
                                    <div className='text-5xl mb-3'>{mostUsedType.icon}</div>
                                    <p className='text-3xl font-bold' style={{ color: mostUsedType.color }}>{mostUsedType.name}</p>
                                    <p className='text-gray-600 mt-2'>
                                        {mostUsedType.value} out of {totalConnections} connections ({totalPercentage}%)
                                    </p>
                                    <div className='mt-4 bg-gray-100 rounded-full h-2 overflow-hidden'>
                                        <div 
                                            className='h-full rounded-full transition-all duration-1000'
                                            style={{ 
                                                width: `${totalPercentage}%`,
                                                backgroundColor: mostUsedType.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ) : (
                                <p className='text-gray-500 text-center'>No connections yet. Start reaching out! 💕</p>
                            )}
                        </div>

                        {/* Fun Facts */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-pink-100'>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='bg-gradient-to-br from-rose-100 to-pink-100 rounded-full p-2'>
                                    <FaRegSmile className='text-rose-500 text-xl' />
                                </div>
                                <h2 className='text-xl font-bold text-gray-800'>Friendship Facts</h2>
                            </div>
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center py-2 border-b border-pink-100'>
                                    <span className='text-gray-600'>Most active type:</span>
                                    <span className='font-semibold' style={{ color: mostUsedType.color }}>
                                        {totalConnections > 0 ? mostUsedType.name : 'No data yet'}
                                    </span>
                                </div>
                                <div className='flex justify-between items-center py-2 border-b border-pink-100'>
                                    <span className='text-gray-600'>Total interactions:</span>
                                    <span className='font-semibold text-pink-600'>{totalConnections}</span>
                                </div>
                                <div className='flex justify-between items-center py-2'>
                                    <span className='text-gray-600'>Bestie connections:</span>
                                    <span className='font-semibold text-rose-500'>✨ {totalConnections} memories ✨</span>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className='bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 text-center'>
                            <GiRose className='text-pink-400 text-3xl mx-auto mb-2' />
                            <p className='text-gray-700 italic'>"Friendship is the only cement that will ever hold the world together."</p>
                            <p className='text-sm text-gray-500 mt-2'>— Woodrow Wilson</p>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom */}
                <div className='mt-12 text-center'>
                    <div className='inline-flex gap-2 text-pink-300'>
                        <GiLipstick className='text-pink-400 text-2xl' />
                        <FaHeart className='animate-pulse text-pink-400' />
                        <GiRose className='text-pink-400 text-2xl' />
                    </div>
                    <p className='text-xs text-gray-400 mt-4'>
                        Every connection strengthens your friendship 💪
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;