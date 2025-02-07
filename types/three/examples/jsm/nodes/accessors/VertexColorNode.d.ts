import { ShaderNodeObject } from '../shadernode/ShaderNode.js';
import AttributeNode from '../core/AttributeNode.js';

export default class VertexColorNode extends AttributeNode {
    readonly isVertexColorNode: true;

    index: number;

    constructor(index?: number);
}

export const vertexColor: (index?: number) => ShaderNodeObject<VertexColorNode>;
