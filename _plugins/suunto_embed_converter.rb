module Jekyll
    class SuuntoEmbedConverter < Converter
      safe true
      priority :low
  
      def matches(ext)
        ext =~ /^\.md$/i
      end
  
      def output_ext(ext)
        ".html"
      end
  
      def convert(content)
        content.gsub(/\[suunto-file\]\((https:\/\/maps\.suunto\.com\/move\/[^\)]+)\)/) do |match|
          url = $1
          <<~HTML
          <iframe 
            src="#{url}" 
            class="suunto-embed" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          HTML
        end
      end
    end
  end