export const checkStatus = (state) => state === null || state.trim() !== '' ? {} :  { error: true };
export const isNullOrBlank = (v) => v === null || (v.trim && v.trim() === '');
