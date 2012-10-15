$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "password_strength/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "password_strength"
  s.version     = PasswordStrength::VERSION
  s.authors     = ["Suraj Pratap"]
  s.email       = ["suraj.pratap24@gmail.com"]
  s.homepage    = ""
  s.summary     = "Shows the strength of password as the user types."
  s.description = ""

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "> 3.1.0"
  s.add_dependency "jquery-rails"
  
  s.add_development_dependency "sqlite3"
end
