import { checkPermissions } from './permissions';
import { checkSupported } from './Supported';

export function checkClipboardSupported() {
  return checkSupported(() => navigator && 'clipboard' in navigator);
}

export function checkClipboardPermissions() {
  return checkPermissions('clipboard-write' as PermissionName);
}
