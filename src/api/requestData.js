import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('/api/login', data, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('/admin/signout');

/**
 * 获取宠物列表
 */

export const getPetsList = () => fetch('/api/pets/list');



// 参考
/**
 * api请求量
 */
export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 用户注册量
 */
export const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 获取定位城市
 */
export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 获取搜索地址
 */
export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */
export const getCategory = restaurant_id => fetch('/shopping/getcategory/' + restaurant_id);

/**
 * 删除餐馆
 */
export const deleteResturant = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取用户信息
 */
export const getUserInfo = user_id => fetch('/v1/user/' + user_id);

