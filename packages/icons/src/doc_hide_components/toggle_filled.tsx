/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const ToggleFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M12.7803 1.96967C12.4874 1.67678 12.0126 1.67678 11.7197 1.96967C11.4268 2.26256 11.4268 2.73744 11.7197 3.03033L12.4393 3.75H3.75C2.23122 3.75 1 4.98122 1 6.5V7.625C1 8.03921 1.33579 8.375 1.75 8.375C2.16421 8.375 2.5 8.03921 2.5 7.625V6.5C2.5 5.80964 3.05964 5.25 3.75 5.25H12.4393L11.7197 5.96967C11.4268 6.26256 11.4268 6.73744 11.7197 7.03033C12.0126 7.32322 12.4874 7.32322 12.7803 7.03033L14.7803 5.03033C15.0732 4.73744 15.0732 4.26256 14.7803 3.96967L12.7803 1.96967Z" fill={ colors[0] }/>
    <path d="M1.21967 12.2803L3.21967 14.2803C3.51256 14.5732 3.98744 14.5732 4.28033 14.2803C4.57322 13.9874 4.57322 13.5126 4.28033 13.2197L3.56066 12.5H12.25C13.7688 12.5 15 11.2688 15 9.75V8.625C15 8.21079 14.6642 7.875 14.25 7.875C13.8358 7.875 13.5 8.21079 13.5 8.625V9.75C13.5 10.4404 12.9404 11 12.25 11H3.56066L4.28033 10.2803C4.57322 9.98744 4.57322 9.51256 4.28033 9.21967C3.98744 8.92678 3.51256 8.92678 3.21967 9.21967L1.21967 11.2197C0.926777 11.5126 0.926777 11.9874 1.21967 12.2803Z" fill={ colors[0] }/>

  </>,
  name: 'toggle_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M12.7803 1.96967C12.4874 1.67678 12.0126 1.67678 11.7197 1.96967C11.4268 2.26256 11.4268 2.73744 11.7197 3.03033L12.4393 3.75H3.75C2.23122 3.75 1 4.98122 1 6.5V7.625C1 8.03921 1.33579 8.375 1.75 8.375C2.16421 8.375 2.5 8.03921 2.5 7.625V6.5C2.5 5.80964 3.05964 5.25 3.75 5.25H12.4393L11.7197 5.96967C11.4268 6.26256 11.4268 6.73744 11.7197 7.03033C12.0126 7.32322 12.4874 7.32322 12.7803 7.03033L14.7803 5.03033C15.0732 4.73744 15.0732 4.26256 14.7803 3.96967L12.7803 1.96967Z', 'M1.21967 12.2803L3.21967 14.2803C3.51256 14.5732 3.98744 14.5732 4.28033 14.2803C4.57322 13.9874 4.57322 13.5126 4.28033 13.2197L3.56066 12.5H12.25C13.7688 12.5 15 11.2688 15 9.75V8.625C15 8.21079 14.6642 7.875 14.25 7.875C13.8358 7.875 13.5 8.21079 13.5 8.625V9.75C13.5 10.4404 12.9404 11 12.25 11H3.56066L4.28033 10.2803C4.57322 9.98744 4.57322 9.51256 4.28033 9.21967C3.98744 8.92678 3.51256 8.92678 3.21967 9.21967L1.21967 11.2197C0.926777 11.5126 0.926777 11.9874 1.21967 12.2803Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
