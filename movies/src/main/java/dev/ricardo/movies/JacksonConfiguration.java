package dev.ricardo.movies;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration // Marks this class as a configuration class for Spring
@ComponentScan(basePackages = "dev.ricardo")
public class JacksonConfiguration {

    // Bean definition to configure the ObjectMapper for Jackson serialization
    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper(); // Create a new ObjectMapper instance
        SimpleModule module = new SimpleModule(); // Create a new module to customize serialization
        module.addSerializer(ObjectId.class, new ToStringSerializer()); // Serialize ObjectId as String
        mapper.registerModule(module); // Register the module with the ObjectMapper
        return mapper; // Return the customized ObjectMapper
    }
}
