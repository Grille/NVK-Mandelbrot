import nvk from "nvk"

export const INT = 0;
export const UINT = 1;
export const FLOAT = 2;

export const TYPE_INT8 = INT | 1 << 4;
export const TYPE_UINT8 = UINT | 1 << 4;
export const TYPE_INT16 = INT | 2 << 4;
export const TYPE_UINT16 = UINT | 2 << 4;
export const TYPE_INT32 = INT | 4 << 4;
export const TYPE_UINT32 = UINT | 4 << 4;
export const TYPE_INT64 = INT | 8 << 4;
export const TYPE_UINT64 = UINT | 8 << 4;
export const TYPE_FLOAT32 = FLOAT | 4 << 4;
export const TYPE_FLOAT64 = FLOAT | 8 << 4;

export const COMMAND_LEVEL_PRIMARY = nvk.VK_COMMAND_BUFFER_LEVEL_PRIMARY;
export const COMMAND_LEVEL_SECONDARY = nvk.VK_COMMAND_BUFFER_LEVEL_SECONDARY;

export const COMMAND_USAGE_ONE_TIME = nvk.VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT;
export const COMMAND_USAGE_SIMULTANEOUS = nvk.VK_COMMAND_BUFFER_USAGE_SIMULTANEOUS_USE_BIT;

export const POLYGON_MODE_FILL = nvk.VK_POLYGON_MODE_FILL;
export const POLYGON_MODE_LINE = nvk.VK_POLYGON_MODE_LINE;
export const POLYGON_MODE_POINT = nvk.VK_POLYGON_MODE_POINT;

export const TOPOLOGY_POINT_LIST = nvk.VK_PRIMITIVE_TOPOLOGY_POINT_LIST;
export const TOPOLOGY_LINE_LIST = nvk.VK_PRIMITIVE_TOPOLOGY_LINE_LIST;
export const TOPOLOGY_LINE_STRIP = nvk.VK_PRIMITIVE_TOPOLOGY_LINE_STRIP;
export const TOPOLOGY_TRIANGLE_LIST = nvk.VK_PRIMITIVE_TOPOLOGY_TRIANGLE_LIST;
export const TOPOLOGY_TRIANGLE_STRIP = nvk.VK_PRIMITIVE_TOPOLOGY_TRIANGLE_STRIP;
export const TOPOLOGY_TRIANGLE_FAN = nvk.VK_PRIMITIVE_TOPOLOGY_TRIANGLE_FAN;

export const CULL_MODE_NONE = nvk.VK_CULL_MODE_NONE;
export const CULL_MODE_FRONT = nvk.VK_CULL_MODE_FRONT_BIT;
export const CULL_MODE_BACK = nvk.VK_CULL_MODE_BACK_BIT;

export const FRONT_FACE_COUNTER = nvk.VK_FRONT_FACE_COUNTER_CLOCKWISE;
export const FRONT_FACE_CLOCKWISE = nvk.VK_FRONT_FACE_CLOCKWISE;

export const BUFFER_USAGE_VERTEX = nvk.VK_BUFFER_USAGE_VERTEX_BUFFER_BIT;
export const BUFFER_USAGE_INDEX = nvk.VK_BUFFER_USAGE_INDEX_BUFFER_BIT;
export const BUFFER_USAGE_STORAGE = nvk.VK_BUFFER_USAGE_STORAGE_BUFFER_BIT;
export const BUFFER_USAGE_UNIFORM = nvk.VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT;

export const BUFFER_STAGING_DYNAMIC = 0;
export const BUFFER_STAGING_STATIC = 1;

export const SHADER_STAGE_NONE = -1;
export const SHADER_STAGE_VERTEX = nvk.VK_SHADER_STAGE_VERTEX_BIT;
export const SHADER_STAGE_FRAGMENT = nvk.VK_SHADER_STAGE_FRAGMENT_BIT;
export const SHADER_STAGE_COMPUTE = nvk.VK_SHADER_STAGE_COMPUTE_BIT;

export const BLEND_FACTOR_ZERO = nvk.VK_BLEND_FACTOR_ZERO;
export const BLEND_FACTOR_ONE = nvk.VK_BLEND_FACTOR_ONE;
export const BLEND_FACTOR_SRC_COLOR = nvk.VK_BLEND_FACTOR_SRC_COLOR;
export const BLEND_FACTOR_ONE_MINUS_SRC_COLOR = nvk.VK_BLEND_FACTOR_ONE_MINUS_SRC_COLOR;
export const BLEND_FACTOR_DST_COLOR = nvk.VK_BLEND_FACTOR_DST_COLOR;
export const BLEND_FACTOR_ONE_MINUS_DST_COLOR = nvk.VK_BLEND_FACTOR_ONE_MINUS_DST_COLOR;
export const BLEND_FACTOR_SRC_ALPHA = nvk.VK_BLEND_FACTOR_SRC_ALPHA;
export const BLEND_FACTOR_ONE_MINUS_SRC_ALPHA = nvk.VK_BLEND_FACTOR_ONE_MINUS_SRC_ALPHA;
export const BLEND_FACTOR_DST_ALPHA = nvk.VK_BLEND_FACTOR_DST_ALPHA;
export const BLEND_FACTOR_ONE_MINUS_DST_ALPHA = nvk.VK_BLEND_FACTOR_ONE_MINUS_DST_ALPHA;
export const BLEND_FACTOR_CONSTANT_COLOR = nvk.VK_BLEND_FACTOR_CONSTANT_COLOR;
export const BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR = nvk.VK_BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR;
export const BLEND_FACTOR_CONSTANT_ALPHA = nvk.VK_BLEND_FACTOR_CONSTANT_ALPHA;
export const BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA = nvk.VK_BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA;
export const BLEND_FACTOR_SRC_ALPHA_SATURATE = nvk.VK_BLEND_FACTOR_SRC_ALPHA_SATURATE;
export const BLEND_FACTOR_SRC1_COLOR = nvk.VK_BLEND_FACTOR_SRC1_COLOR;
export const BLEND_FACTOR_ONE_MINUS_SRC1_COLOR = nvk.VK_BLEND_FACTOR_ONE_MINUS_SRC1_COLOR;
export const BLEND_FACTOR_SRC1_ALPHA = nvk.VK_BLEND_FACTOR_SRC1_ALPHA;
export const BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA = nvk.VK_BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA;

export const SHADER_SRC_SPIRV = 0;
export const SHADER_SRC_GLSL = 1;
export const SHADER_SRC_HLSL = 2;