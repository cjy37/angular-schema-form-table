/**
 * Created by SAMSUNG on 2015/10/23.
 */

//构建测站对象
//sitId:			测站ID
//x,y,z:			测站位置信息，去mos_point表中取测站点的s_scan_x，s_scan_y，s_scan_z
//h:				高s_prism_hight/1000,转换单位为米
//NominalAccuracy;	测角标称精度，单位 度，默认1度
//fixError;			固定误差，单位 mm，默认1mm
//incError;			增量误差，单位 ppm（百万分之），默认1ppm
function creatStation(sitId, _x, _y, _z, h, _dirAngle, NominalAccuracy, fixError, incError)
{
  var station = {};
  station.pid = sitId;
  station.x = _x;
  station.y = _y;
  station.z = _z;						// 仪器坐标
  station.height = h;					// 仪器高
  station.dirAngle = _dirAngle;		// 定向角
  station.H = NominalAccuracy;	// 测角标称精度，单位 度，默认1度
  station.V = fixError;			// 固定误差，单位 mm，默认1mm
  station.S = incError;			// 增量误差，单位 ppm（百万分之），默认1ppm
  return station;
}

// 根据给出的角度、距离和高，计算出位置信息x,y,z
//H:			水平角
//S:			距离
//V:			垂直角
//point_height:	棱镜高，s_prism_hight/1000,转换单位为米
function convert(sitId, _x, _y, _z, h, _dirAngle, NominalAccuracy, fixError, incError,H, S, V, point_height)
{
  var station = creatStation(sitId, _x, _y, _z, h, _dirAngle, NominalAccuracy, fixError, incError);

  // 转为弧度
  V1 = V*Math.PI/180;
  H1 = (H + station.dirAngle)*Math.PI/180;

  // 投影距离 --> s1
  s1 = S * Math.sin(V1);
  dz = S * Math.cos(V1);
  dx = s1 * Math.cos(H1);
  dy = s1 * Math.sin(H1);

  var pointData = {};
  pointData.x = station.x + dx;
  pointData.y = station.y + dy;
  pointData.z = station.z + station.height + dz - point_height;
  pointData.H = H;
  pointData.V = V;
  pointData.S = S;
  pointData.height = point_height;

  return pointData;
}


// 传入测点的x,y,z,高度，单位为米。计算出角度和距离
//x0:			表中字段s_scan_x
//y0:			s_scan_y
//z0:			s_scan_z
//point_height:	棱镜高，s_prism_hight/1000,转换单位为米
function unConvert(sitId, _x, _y, _z, h, _dirAngle, NominalAccuracy, fixError, incError,x0, y0, z0, point_height)
{
  var station = creatStation(sitId, _x, _y, _z, h, _dirAngle, NominalAccuracy, fixError, incError);

  dx = (x0 - station.x);
  dy = (y0 - station.y);
  dz = (z0 + point_height) - (station.z + station.height);
  xx_yy = dx*dx + dy*dy;
  S = Math.sqrt(xx_yy + dz*dz);
  V = Math.acos(dz/S);

  s1 = Math.sqrt(xx_yy);
  H = Math.acos(dx/s1);
  if (dy < 0)
    H = -H;

  H = H*180/Math.PI - station.dirAngle;
  V = V*180/Math.PI;
  H = ANGLE_TO_360(H);
  V = ANGLE_TO_360(V);

  var pointData = {};

  pointData.x = x0;
  pointData.y = y0;
  pointData.z = z0;
  pointData.H = H;
  pointData.V = V;
  pointData.S = S;
  pointData.height = point_height;

  return pointData;
}

function ANGLE_TO_360(a)
{
  while (a > 360)
    a -= 360;
  while (a < 0)
    a += 360;
  return a;
}

// 根据近似坐标，计算出 s -> p 的水平方向角，返回角度值
function get_H_by_xyz(s, p)
{
  var dx = (p.scan_x - s._x);
  var dy = (p.scan_y - s._y);
  var dAngle;
  if (ISZERO(dy))
  {// DY == 0
    if (dx > 0)
      dAngle = 0;
    else
      dAngle = 180;
  }
  else
  {
    var dTan = dx/dy;
    var sgnY = dy > 0 ? 1 : -1;
    dAngle = 180 - 90*sgnY - Math.atan(dTan)*180/Math.PI;
    if (dAngle < 0)
      dAngle += 360;
    else if (dAngle >= 360)
      dAngle -= 360;
  }
  return dAngle;
}
var EQ_MAX = 0.0000001;	// 用来判断浮点相等的最小值，绝对值小于此值的认为是 0
function ISZERO (d)
{
  if (d < 0)
    d = -d;
  return d < EQ_MAX;
}
