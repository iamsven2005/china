// export default {
//   // 当 HTTP 请求方法是 GET，可以省略请求方法
//   '/api/users': [{ name: 'foo', id: 1 }, { name: 'bar', id: 2 }],
//   // 等同于上面的写法
//   'GET /api/users': [{ name: 'foo', id: 1 }, { name: 'bar', id: 2 }],

//   'POST /api/user': { users: [1, 2] },

//   'DELETE /api/users/1': { name: 'foo' },
// }
import Mock from 'mockjs';

export default {
  'GET /api/list': (req, res) => {
    const list = Mock.mock({
      'list|1-10': [
        {
          'id|+1': 1,
        },
      ],
    });
    res.send({
      status: 'SUCCESS',
      data: {
        list,
      }
    });
  },
};