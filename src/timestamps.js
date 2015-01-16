function correctTimestamp (time, correction)
{
  /*Correction is given in minutes, so first we need to change it to milliseconds
  *to handle DateObject time correctly
  */
  correction = correction * 60 * 1000;

  var corrected = time.getTime() + correction;

  return new Date(corrected);
};