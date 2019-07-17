const processEnv = process.env

const checkEnv = (envs) => {
  const missedEnvs = []
  const checkedEnvsObj = {}

  envs.forEach((env) => {

    // filter envs
    if (Object.keys(processEnv).includes(env)) {
      checkedEnvsObj[env] = processEnv[env]
    } else {
      missedEnvs.push(env)
    }
  })

  if (missedEnvs.length === 0) return checkedEnvsObj

  if (missedEnvs.length === 1) {
    throw new Error('Missed env variable ' + missedEnvs[0])
  }

  throw new Error('Missed env variables ' + missedEnvs.join(', '))
}

module.exports = checkEnv