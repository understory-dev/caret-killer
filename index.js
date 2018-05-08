#! /usr/bin/env node

const path = require('path')
const fs = require('fs')

// const projectDir = path.join(__dirname, 'fixtures')
const projectDir = process.cwd()

const readPackageJson = dir => {
  return JSON.parse(fs.readFileSync(
    path.join(dir, 'package.json'),
    'utf-8'
  ))
}

// read package.json
const projectPackageJson = readPackageJson(projectDir)

const getCaretDeps = (deps) => {
  return Object.keys(deps)
    .map(key => {
      return {
        name: key,
        version: deps[key],
      }
    })
    .filter(dep => {
      return dep.version[0] === '^'
    })
}

const changes = []

const updateDeps = (packageJson, depenencyType) => {
  const caretDeps = getCaretDeps(packageJson[depenencyType])
  caretDeps.forEach(dep => {
    const depDir = path.join(projectDir, 'node_modules', dep.name)
    const depPackageJson = readPackageJson(depDir)
    const actualVersion = depPackageJson.version
    if (actualVersion !== dep.version) {
      changes.push(`${dep.name}: ${dep.version} -> ${actualVersion}`)
    }
    packageJson[depenencyType][dep.name] = actualVersion
  })
  return packageJson
}

// side effects!
updateDeps(projectPackageJson, 'dependencies')
updateDeps(projectPackageJson, 'devDependencies')

if (changes.length) {
  changes.sort().forEach(x => console.log(x))
  const prettyJson = JSON.stringify(projectPackageJson, null, 2)
  fs.writeFileSync(path.join(projectDir, 'package.json'), prettyJson)
}
