// ------------------------------------------------------------------------------
// name: isBase64URL.spec
// author: mudas( mschool.tech )
// created: 2021/4/12 17:13
// ------------------------------------------------------------------------------

import { isBase64URL } from '@mudas/validate';

const Data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNjc2MDExRkQyM0IxMUU4ODVDOUNGNDFCQ0U0QjZFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNjc2MDEyMEQyM0IxMUU4ODVDOUNGNDFCQ0U0QjZFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE2NzYwMTFERDIzQjExRTg4NUM5Q0Y0MUJDRTRCNkU3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2NzYwMTFFRDIzQjExRTg4NUM5Q0Y0MUJDRTRCNkU3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ShOSwwAAAQVJREFUeNpi5O55xUAEuA7EjECsgS7xpVgUhc9EhGG7oAapA/FuQooJGbgAiF2BuB2I24DYBYgX4tPAgkeuBYjjgXg/EFdBxcyBOA6InyKJEeXCTCCuBuKbQOyEJO4CDc9KIM4m1kA/IJ4GxB+gLkIHFkD8HoinALE/IQNNgXgjlG0CxB+xGPgJKgcCG3h6X5vhMlAeiE9B2dZAfBdP+N4DYiso+yTQUHl0A7mB+DSUHQrEx4hITseBOBjKPgM0lAfZQJABoBRaAMRrGIgH64A4D4hFYI4AGXgeiPWAuBuIJzKQCIA5ZTKQ6gJiXaArLzJBc8FWIC5jIBMADS0HUluAWA0gwABzrjSdyF1GJgAAAABJRU5ErkJggg==';

describe('isBase64URL test:', () => {
  it('isBase64URL("data:image/png;base64,iVBORw0KGgoAA...") must be truthy', () => {
    expect(isBase64URL(Data)).toBeTruthy();
  });
});