/**
 *
 * @param token
 * @returns {{Authorization: string}}
 */
export const getAuthHeaders = ({ token }) => ({
  Authorization: `Bearer ${token}`,
});
