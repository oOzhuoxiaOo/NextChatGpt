import { checkSupported } from './Supported';

export function checkPermissions(name: PermissionName) {
  if (!checkPermissionsSupported()) {
    throw new Error('Permissions API is not supported');
  }
  return navigator.permissions.query({ name });
}

export function checkPermissionsSupported() {
  return checkSupported(() => navigator && 'permissions' in navigator);
}
