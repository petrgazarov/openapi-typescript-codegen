import {ContentType} from './constants';
import {Dictionary} from '../../../utils/types';
import {OpenApi} from '../interfaces/OpenApi';
import {OpenApiMediaType} from '../interfaces/OpenApiMediaType';
import {OpenApiSchema} from '../interfaces/OpenApiSchema';

export function getContent(openApi: OpenApi, content: Dictionary<OpenApiMediaType>): OpenApiSchema | null {
    /* prettier-ignore */
    return (
        content[ContentType.APPLICATION_JSON_PATCH] &&
        content[ContentType.APPLICATION_JSON_PATCH].schema
    ) || (
        content[ContentType.APPLICATION_JSON] &&
        content[ContentType.APPLICATION_JSON].schema
    ) || (
        content[ContentType.TEXT_JSON] &&
        content[ContentType.TEXT_JSON].schema
    ) || (
        content[ContentType.TEXT_PAIN] &&
        content[ContentType.TEXT_PAIN].schema
    ) || null;
}
